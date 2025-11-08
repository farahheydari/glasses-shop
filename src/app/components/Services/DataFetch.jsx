
export default async function getData(url) {
    let res = await fetch(url)
    if(!res) {throw new Error(err)}
    let data =await res.json()
    return data
}