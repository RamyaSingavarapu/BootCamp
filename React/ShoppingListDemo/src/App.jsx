
import './App.css'
import ShoppingList from "./ShoppingList"

function App() {
  const data = [
    { item: "eggs", quantity: 12, completed: false },
    { item: "chickenBreast", quantity: 1, completed: true },
    { item: "milk", quantity: 5, completed: false },
    { item: "bread", quantity: 1, completed: true },
  ]
  return (
    <>
      <ShoppingList items={data} />

    </>
  )
}

export default App
