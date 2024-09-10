import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import { useState } from "react"

export default function FormDemo() {
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(0)
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleVolume = (e) => {
        setVolume(e.target.value)
    }

    return (
        <>
            <Box sx={{ border: "1px solid red", p: 2 }}>
                <h3>The name is :{name}</h3>
                <TextField id="outlined-basic" label="PuppyName" variant="outlined" placeholder="trio" value={name} onChange={handleChange} />
                <h3>The volume: {volume}</h3>
                <Slider aria-label="Volume" value={volume} onChange={handleVolume} />
            </Box>
        </>
    )
}