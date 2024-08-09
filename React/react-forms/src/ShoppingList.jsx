import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm";
function ShoppingList() {
    const [items, setItems] = useState([
        { id: 1, product: "apples", quantity: 4 },
        { id: 2, product: "sausage", quantity: 8 }
    ])
    const addItem = (items) => {
        setItems((currItem) => {
            return [
                ...currItem, { ...items, id: 3 }
            ]
        })
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product}-{i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    )
}

export default ShoppingList;