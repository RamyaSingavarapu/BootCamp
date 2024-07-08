import Property from "./Property"
import "./PropertyList.css";
function PropertyList({ propertys }) {
    let nameOfClass = "PropertyList";

    return (
        <div className="PropertyList" >
            {propertys.map((p) => {
                return <Property {...p} key={p.id} />;
            })}
        </div >
    )
}

export default PropertyList;