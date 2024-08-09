import { useState } from "react"
function UsernameForm() {
    const [username, setUsername] = useState("timmy")
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }
    return (
        <div>
            <label htmlFor="username">Enter a username</label>
            <input placeholder="username" type="text" onChange={updateUsername} value={username} id="username" />
            <button>Submit</button>
        </div>
    )
}
export default UsernameForm;