import { useState } from "react"

function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 })
    const [productIsValid, setProductIsValid] = useState(false)
    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value)
        }
        setFormData((currData) => {
            return { ...currData, [evt.target.name]: evt.target.value }
        })
    }
    const validate = (product) => {
        if (product.length === 0) {
            setProductIsValid(false)
        } setProductIsValid(true)
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        if (productIsValid) {
            addItem(formData);
            setFormData({ product: "", quantity: 0 })
        }

        // e.target.submit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="productname">Enter Product:</label>
            <input type="text" placeholder="product name" value={formData.product} name="product" id="productname" onChange={handleChange} />
            {!productIsValid && (<p style={{ color: "red" }}>product cannot be empty</p>)}
            <label htmlFor="quantity">Enter quantity:</label>
            <input type="number" placeholder="1" value={formData.quantity} name="quantity" id="quantity" onChange={handleChange} />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    )
}

export default ValidatedShoppingListForm;