import { useState } from "react";

function ProfileSearchForm({ search }) {
    const [term, setTerm] = useState("");

    function handleChange(evt) {
        setTerm(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        search(term);
        setTerm("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={handleChange} />
            <button>Search!</button>
        </form>
    );
}

export default ProfileSearchForm;
