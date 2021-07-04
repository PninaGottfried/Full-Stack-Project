import './glasses.css';
import { open_buy_modal } from './../buy_modal/buy_modal'



function Glasses(props) {

    let image = require("./../../assests/images/img_"+props.id+".jpg");

    return (<div>
        <img src={image.default} alt={"תמונה של משקפיים"} className="glasses-img" />
        <div>
            
            <h5 className="glasses-cost">{props.cost}₪</h5>
        </div>
        <button onClick={open_buy_modal}>קניה</button>
        <button onClick={props.onOpenCamera}>מדידה</button>
    </div>

    )
}

export default Glasses;