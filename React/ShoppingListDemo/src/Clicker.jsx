function handleClick() {
    console.log("Clicked the button");
}
function handleHover() {
    console.log("HOVERED");
}

export default function Clicker() {
    return (
        <div>
            <h2 onMouseOver={handleHover}>Hover over Me</h2>
            <button onClick={handleClick}>Click</button>
        </div>

    )
}