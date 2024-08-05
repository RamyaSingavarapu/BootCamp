import { useState } from "react"

function generateGameBoard() {
    console.log("MAKING THE INITIAL GAME BAORD");
    return Array(5000);
}

function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    return <button onClick={() => setBoard("hello")}>Click me to Change State</button>
}

export default Dumbo;