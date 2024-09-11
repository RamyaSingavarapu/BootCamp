import ListItem from '@mui/material/ListItem';
import { useState } from "react"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create'


export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("")
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add Todo" variant="outlined" value={text} onChange={handleChange} InputProps={{
                    endAdornment: (< InputAdornment position="end" >
                        <IconButton
                            aria-label="toggle password visibility" type="submit"
                        >
                            <Create />
                        </IconButton>
                    </InputAdornment>
                    )
                }} />
            </form>
        </ListItem >
    )
}


