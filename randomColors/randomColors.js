const button = document.querySelector("#btn");
const h1 = document.querySelector("h1");
button.addEventListener('click', function () {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
const makeRandomColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r)
        return `rgb(${r},${g},${b})`;
}
/*document.querySelector('button').addEventListener('keyup', function () {
    console.log("KEYUP")
})*/
/*document.querySelector('input').addEventListener('keydown', function () {
    console.log("KEYDOWN")
})
document.querySelector('input').addEventListener('keyup', function () {
    console.log("KEYUP")
})*/
/*document.querySelector('input').addEventListener('keydown', function (e) {
    console.log(e.code)
})*/
/*window.addEventListener('keydown', function (e) {
    console.log(e.code)j
})*/
