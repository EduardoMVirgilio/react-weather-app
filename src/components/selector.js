import {useContext} from 'react';
import {regionContext} from '../context/region';
import {countriesContext} from '../context/countries';
import {countryContext} from '../context/country';
import Data from './data';
import '../style/selector.css';
function Selector() {
const {region,setRegion} = useContext(regionContext);
const {countries} = useContext(countriesContext);
const {country,setCountry} = useContext(countryContext);

const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setCountry(null)
};

return (
    <>
        <section className='selectors'>
            <select className='selectors__select' defaultValue={region} onChange={handleRegionChange}>
                <option disabled>Select Region</option>
                <option value="america">America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="oceania">Oceania</option>
                <option value="africa">Africa</option>
            </select>
            <select  className='selectors__select' defaultValue={null} onChange={(e) => setCountry(e.target.value)}>
                <option value={null}>Select Country</option>
                {countries.map((country,index) => (
                    <option key={index} value={country.name.common.toLowerCase()}>{country.name.common}</option>
                ))}
            </select>
        </section>
        {
            country && country !== null && <Data />
        }
    </>
 )
    
}
export default Selector