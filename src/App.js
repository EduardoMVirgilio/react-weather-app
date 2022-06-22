import Region from "./context/region";
import Countries from "./context/countries";
import Country from "./context/country";
import Selector from "./components/selector";
import "./style/app.css";
function App() {
  return (
    <Region>
      <Countries>
        <Country>
            <Selector />
        </Country>
      </Countries>
    </Region>
  );
}

export default App;
