export default function Die({ side = 6 }) {
    const num = Math.floor((Math.random() * side) + 1)
    return <p>{side}-sided Die Roll:{num} </p>
}