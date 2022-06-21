import {useContext,useState} from 'react';
import {countryContext} from '../context/country';
function Selector() {
const context = useContext(countryContext);
const [region, setRegion] = useState('america');
const {country,setCountry} = context;
 return (
    <>
        <h1>Country Selector : {country}</h1>
        <select onChange={(e) => setRegion(e.target.value)}>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
            <option value="africa">Africa</option>
        </select>
        <select onChange={(e) => setCountry(e.target.value)}>
            <option value="argentina">Argentina</option>
            <option value="brazil">Brazil</option>
            <option value="chile">Chile</option>
        </select>
    </>
 )
    
}
export default Selector