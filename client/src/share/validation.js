const validName=(name)=>{
    if(Number(name)){
        return false;
    }
    return true;
}
const validPhoneNumber=(phoneNumber)=>{
    if(phoneNumber.length!==9&&phoneNumber.length!==10){
        return false;
    }
    if(!(phoneNumber.charAt(0)==='0')||!Number(phoneNumber)){
        return false;
    }
    return true;
}

const validMailAddress=(MailAddress)=> 
{  
var x=MailAddress;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){   
  return false;  
  }  
  return true;
}  

const validFile=(file)=>{
if(file==null){return false}
return true
}





export{validName,validMailAddress,validPhoneNumber,validFile}