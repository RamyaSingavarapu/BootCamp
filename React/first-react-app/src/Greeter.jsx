export default function Greeter({ person = "everyone", from = "anonymous" }) {

    return (
        <>
            <h2>Hey there!{person}!! </h2>
            <h3>-{from}</h3>
        </>

    )

}

