'use strict'
let express = require('express');
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
const { ObjectId } = require('bson');
var nodemailer = require('nodemailer');
var valid = require('./validation');
app.listen(8080, function () {
    console.log("The listen succeeded!");
});

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://optics:optics@opticsfirstcluster.qonzb.mongodb.net/test'
let db;
let items;
let orders;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('DB connection completed')
    db = client.db('OpticsFirstDB')
    items = db.collection('items')
    orders = db.collection('orders')
    setInterval(changeStatus, 1000);
})

app.get("/", (req, res) => {
    items.find().toArray()
        .then(result => {
            res.send(result);
        })
        .catch(error => console.error(error))
}
)

app.get("/StatusCheck/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) res.send("-1000")
    else orders.findOne({ _id: ObjectId(req.params.id) })
        .then(result => {
            res.send(String(result.status));
        })
        .catch(error => console.error(error))
}
)


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'opticsfirst2@gmail.com',
        pass: 'optics111'
    }
});


app.post("/", async (req, res) => {
    if (!valid.validName(req.body.name)
        || !valid.validPhoneNumber(req.body.phone)
        || !valid.validMailAddress(req.body.mail)) {
        res.send("The Post failed")
        return
    }
    orders.insertOne(req.body)
        .then(() => {
            let id = req.body._id;
            var mailOptions = {
                from: 'Optics First',
                to: req.body.mail,
                subject: 'ההזמנה בוצעה בהצלחה!',
                html: '<div><h1 style="color:#63c5c6;">תודה שקנית אצלינו משקפיים!</h1><h3 style="color:#1c4a4a;">קוד ההזמנה שלך: ' + id +
                    '</h3><h2 style="color:black;">להתראות!</h2><h4><a style="color:#7dcdcf;" href="http://localhost:9991/StatusCheck">איפה המשקפיים שלי?</a></h4></div>'
            };
            transporter.sendMail(mailOptions).catch(error => console.error(error));
            res.send("The Post succeeded");
        })
        .catch(error => console.error(error))

});

function changeStatus() {
    let date = new Date().getTime();
    orders.find().toArray()
        .then(result => {
            for (let index = 0; index < result.length; index++) {
                switch (result[index].status) {
                    case 0:
                        break;
                    case 1: if (date >= result[index].timetoChange0) orders.updateOne(
                        { _id: result[index]._id },
                        { $set: { status: 0 } }
                    ).catch(error => console.error(error))
                        break;
                    case 2: if (date >= result[index].timetoChange1) orders.updateOne(
                        { _id: result[index]._id },
                        { $set: { status: 1 } }
                    ).catch(error => console.error(error))
                        break;
                    case 3: if (date >= result[index].timetoChange2) orders.updateOne(
                        { _id: result[index]._id },
                        { $set: { status: 2 } }
                    ).catch(error => console.error(error))
                        break;
                    default:
                        break;
                }
            }
        })
        .catch(error => console.error(error))
}
