import Country from "./context/country";
import Weather from "./context/weather";
import Selector from "./components/selector";
import Data from "./components/data";
import "./style/app.css";
function App() {
  return (
    <Country>
      <Weather>
        <Selector />
        <Data />
      </Weather>
    </Country>
  );
}

export default App;
