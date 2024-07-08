import "./PropertyList.css";
export default function Property({ name, rating, price, id }) {
    return (
        <div className="Property">
            <h2 id="text">{name}</h2>
            <h3>${price} a night </h3>
            <h4>{rating}⭐️</h4>
        </div>
    )
}