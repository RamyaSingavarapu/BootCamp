import { useState } from "react"
import { getRolls } from "./utilis"
import Dice from "./Dice"
import Button from "./Button"
function LuckyN({ numDice = 2, winCheck, title }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button label="Re-Roll" clickFunc={roll} />
        </main>
    )
}
export default LuckyN;