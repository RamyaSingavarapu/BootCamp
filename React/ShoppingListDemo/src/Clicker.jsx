function handleClick() {
    console.log("Clicked the button");
}

export default function Clicker() {
    return (
        <div>
            <h2>Click the button</h2>
            <button onClick={handleClick}>Click</button>
        </div>

    )
}