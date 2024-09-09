import { useState, useEffect } from "react"


function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(function myEffect() {
        console.log("MY EFFECT IS CALLED")
    }, [])
    const incrementCount = () => {
        setCount((c) => c + 1)
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={incrementCount}>+1</button>
            <h1>Name:{name}</h1>
            <input type="text" value={name} onChange={handleChange} />
        </>
    )
}

export default Counter;