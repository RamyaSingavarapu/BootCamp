import ShoppingListItem from './ShoppingListItem'
function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(i => (
                <ShoppingListItem key={i.id} item={i.item} quantity={i.quantity} completed={i.completed} />
                // <ShoppingListItem key={i.id} {...i} />//{...i} passes each and every key value pair in a object
            ))}
        </ul>
    )
}

export default ShoppingList;