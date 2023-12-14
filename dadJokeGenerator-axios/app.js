const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement("Li");
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const response = await axios.get("https://icanhazdadjoke.com/", config)
        return response.data.joke;
    } catch (e) {
        console.log(e);
    }
}
button.addEventListener("click", addNewJoke);



