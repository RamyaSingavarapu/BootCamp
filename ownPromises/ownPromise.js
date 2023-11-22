const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
// delayedColorChange("red", 1000)
//     .then(() => delayedColorChange("orange", 1000))
//     .then(() => delayedColorChange("yellow", 1000))
//     .then(() => delayedColorChange("green", 1000))
//     .then(() => delayedColorChange("blue", 1000))
//     .then(() => delayedColorChange("indigo", 1000))
//     .then(() => delayedColorChange("violet", 1000))
const rainbow = async () => {
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
}
async function printRainbow() {
    await rainbow()
    console.log("DONE!!")
}





