import './App.css'
import Greeter from "./Greeter"
import Chicken from "./Chicken"
import Die from "./Die"

function App() {
  return (
    <div>
      <Greeter from="Dinesh" />
      <Greeter person="Chubby" />
      <Greeter person="Laddu" from="Mammy" />
      <Die side={20} />
      <Die />
      <Die side={10} />
    </div>
  );
}
export default App;
