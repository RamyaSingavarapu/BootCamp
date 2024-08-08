import "./Button.css"
function Button({ label = "Click Me", clickFunc }) {

    return <button onClick={clickFunc} className="Button">{label}</button>
}

export default Button;