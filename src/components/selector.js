import {useContext} from 'react';
import {countryContext} from '../context/country';
function Selector() {
const context = useContext(countryContext);
const {country,setCountry} = context;
 return (
    <>
        <h1>Country Selector : {country}</h1>
        <select onChange={(e) => setCountry(e.target.value)}>
            <option value="argentina">Argentina</option>
            <option value="brazil">Brazil</option>
            <option value="chile">Chile</option>
        </select>
    </>
 )
    
}
export default Selector