
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RatingDemo from "./RatingDemo"
import FormDemo from "./FormDemo"
import Navbar from "./Navbar"

function App() {

  return (
    <>
      {/* <Button variant="text">Contained</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button variant="contained" color="error" onClick={() => alert("DANGER")}>Contained</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>

 */}
      {/* <RatingDemo /> */}
      <Navbar />
      <FormDemo />


    </>
  )
}

export default App
