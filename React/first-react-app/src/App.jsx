import './App.css'
import Greeter from "./Greeter"

import Chicken from "./Chicken"

function App() {
  return (
    <div>
      <Greeter person="Ramya" from="Dinesh" />
      <Greeter person="Chubby" from="Dinesh" />
      <Greeter person="Laddu" from="Sobha" />
    </div>
  );
}
export default App;
