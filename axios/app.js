const getStarWarsPeople = async (id) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}`)
        console.log(response.data);
    }
    catch (e) {
        console.log("ERROR", e);
    }
}
getStarWarsPeople(5);
getStarWarsPeople(3);