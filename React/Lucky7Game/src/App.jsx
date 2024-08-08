import './App.css'
import LuckyN from "./LuckyN"
function App() {
  return (
    <>
      <LuckyN />
      <LuckyN numDice={4} goal={11} />

    </>
  )
}

export default App
