function handleFormSubmit(e) {
    e.preventDefault()
    console.log("SUBMITTED THE FORM");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button >Submit</button>
        </form>
    )
}