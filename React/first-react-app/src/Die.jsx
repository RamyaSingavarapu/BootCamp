export default function Die({ side }) {
    const num = Math.floor((Math.random() * side) + 1)
    return <h1>{side}-sided Die Roll:{num} </h1>
}