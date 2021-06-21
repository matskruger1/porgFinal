export async function getData(q) {
    try {
        let resultado = await fetch("https://randomuser.me/api/?results=" + q);
        let json = await resultado.json();
        // console.log(json)
        return json.results;
    } catch(e) {
        console.log(e);
    }
}