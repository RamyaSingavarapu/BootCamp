const form = document.querySelector("#searchForm");
const imageContainer = document.querySelector("#images");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = form.elements[0].value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements[0].value = " ";



})

const makeImages = function (shows) {
    imageContainer.innerHTML = "";

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            imageContainer.append(img);
        }


    }
}
