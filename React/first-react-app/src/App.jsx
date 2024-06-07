import './App.css'
import Greeter from "./Greeter"
import Chicken from "./Chicken"
import Die from "./Die"

function App() {
  return (
    <div>
      {/* <Greeter person="Ramya" from="Dinesh" />
      <Greeter person="Chubby" from="Dinesh" />
      <Greeter person="Laddu" from="Sobha" /> */}
      <Die side={20} />
      <Die side={6} />
      <Die side={10} />
    </div>
  );
}
export default App;
