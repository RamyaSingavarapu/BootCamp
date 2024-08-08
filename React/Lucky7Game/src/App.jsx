import './App.css'
import LuckyN from "./LuckyN"
import { sum } from "./utilis"

function lessThan4(dice) {
  return sum(dice) < 4;
}
function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}
function App() {
  return (
    <>
      <LuckyN numDice={2} winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN numDice={3} winCheck={allSameValue} title="Roll the same number" />
    </>
  )
}

export default App
