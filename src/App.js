import {Country} from "./context/country";
import {Weather} from "./context/weather";
import countrySelector from "./components/countrySelector";

function App() {
  return (
  <>
    <Country>
      <Weather>
        <countrySelector />
      </Weather>
    </Country>
  </>
  );
}

export default App;
