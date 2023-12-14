/*fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESOLVED", res);
        return res.json();
    })
    .then((data) => {
        console.log("DATA", data);
    })
    .catch((e) => {
        console.log("ERROR", e);
    });
*/
const loadStarWarsPeople = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        console.log(data);
        const response2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await response2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!!", e)
    }
}

loadStarWarsPeople();
