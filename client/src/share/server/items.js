export const add_items = async () => {
    let res = await fetch('http://localhost:8080')
    let items = await res.json()
    return items;
}