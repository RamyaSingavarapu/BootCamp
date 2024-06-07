export default function ListPicker({ values }) {
    const randIndx = Math.floor((Math.random() * values.length))
    const randEle = values[randIndx]
    return (
        <>
            <p>The list of elements:{values} </p>
            <p>Random element is: {randEle}</p>
        </>
    )
}