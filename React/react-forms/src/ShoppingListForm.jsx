import { useState } from "react"
function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 })
    const handleChange = (evt) => {
        setFormData((currData) => {
            return { ...currData, [evt.target.name]: evt.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMITTED");
        addItem(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>The Product is {formData.product} and quantity is {formData.quantity}</h1>
            <label htmlFor="productname">Enter Product:</label>
            <input type="text" placeholder="product name" value={formData.product} name="product" id="productname" onChange={handleChange} />
            <label htmlFor="quantity">Enter quantity:</label>
            <input type="number" placeholder="1" value={formData.quantity} name="quantity" id="quantity" onChange={handleChange} />
            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;