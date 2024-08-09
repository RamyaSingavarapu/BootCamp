import { useState } from "react"
function UsernameForm() {
    const [username, setUsername] = useState("timmy")
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }
    return (
        <div>
            <input placeholder="username" type="text" onChange={updateUsername} value={username} />
            <button>Submit</button>
        </div>
    )
}
export default UsernameForm;