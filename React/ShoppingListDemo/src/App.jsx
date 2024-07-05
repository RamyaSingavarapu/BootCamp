
import './App.css'
import ShoppingList from "./ShoppingList"
// var ShoppingList = require("./ShoppingList")

function App() {
  const data = [
    { id: 1, item: "eggs", quantity: 12, completed: false },
    { id: 2, item: "chickenBreast", quantity: 1, completed: true },
    { id: 3, item: "milk", quantity: 5, completed: false },
    { id: 4, item: "bread", quantity: 1, completed: true },
  ]
  return (
    <>
      <ShoppingList items={data} />

    </>
  )
}

export default App
