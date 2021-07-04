export const StatusCheck = async () => {
    let id = document.getElementById("status-check").value
    id = id === "" ? "-" : id
    let res = await fetch('http://localhost:8080/StatusCheck/' + id)
    let status = await res.text()
    return status;
}