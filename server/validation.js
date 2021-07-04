function validName(name) {
    if (Number(name))
        return false;
    return true;
}

function validPhoneNumber(phoneNumber) {
    if (phoneNumber == "No need to call")
        return true
    if (phoneNumber.length !== 9 && phoneNumber.length !== 10)
        return false;
    if (!(phoneNumber.charAt(0) === '0') || !Number(phoneNumber))
        return false;
    return true;
}

function validMailAddress(MailAddress) {
    var x = MailAddress;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length)
        return false;
    return true;
}







module.exports = { validName, validMailAddress, validPhoneNumber }