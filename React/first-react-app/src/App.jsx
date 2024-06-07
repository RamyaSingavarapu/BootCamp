import './App.css'
import Greeter from "./Greeter"
import Chicken from "./Chicken"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from "./Heading"
import ColorList from "./ColorList"

function App() {
  return (
    <div>
      <Heading color="magenta" text="Welcome!!" fontSize="48px" />
      <Heading color="olive" text="Welcome!!" fontSize="20px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey", "magenta"]} />
      {/* <Greeter from="Dinesh" />
      <Greeter person="Chubby" />
      <Greeter person="Laddu" from="Mammy" />
      <Die side={20} />
      <Die />
      <Die side={10} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} /> */}

    </div>
  );
}
export default App;
