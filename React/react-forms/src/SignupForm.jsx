import { useState } from "react"
function SignupForm() {
    const [formData, setFormData] = useState({ firstname: "", secondname: "", password: "" })
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            currData[changedField] = newValue;
            return { ...currData };
        })
    }
    const handleSubmit = () => {
        console.log(formData);
    }
    return (
        <div>
            <label htmlFor="firstname">Enter firstname</label>
            <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
            <label htmlFor="secondname">Enter secondname</label>
            <input type="text" id="secondname" name="secondname" value={formData.secondname} onChange={handleChange} />
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupForm;