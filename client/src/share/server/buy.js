export const buy = async () => {
    let date = new Date();       
    date.setMinutes(date.getMinutes() + 10);
    let timetoChange2 = date.getTime();
    date.setHours(date.getHours() + 10);
    let timetoChange1 = date.getTime();        
    date.setHours(date.getHours() + 13);       
    let timetoChange0 = date.getTime();
    
    await fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "name": document.getElementById("nameBM").value,
                "phone": document.getElementById("checkboxBM").checked ? document.getElementById("phoneBM").value : "No need to call",
                "address": document.getElementById("addressBM").value,
                "mail": document.getElementById("mailBM").value,
                "status": 3,
                "timetoChange0": timetoChange0,
                "timetoChange1": timetoChange1,
                "timetoChange2": timetoChange2 
            })
    })
}