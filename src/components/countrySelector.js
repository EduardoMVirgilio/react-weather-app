import {useContext,useState,useEffect} from 'react';
import {Country} from '../context/country';
import useAxios from '../hooks/useAxios';
const countrySelector = () => {
    const [region, setRegion] = useState('america');
    const [countries, setCountries] = useState([]);
    const [country,setCountry] = useContext(Country);
    const api = 'https://restcountries.com/v3.1';
    const url = `/region/${region}`;
    const method = 'get';
    const body = null;
    const headers = null;
    const {response,loading,error} = useAxios({api,url,method,body,headers})
    
    useEffect(() => {
        if (response !== null && error === null) {
            setCountries(response);
        }
    }, [response]);

    return (
        <select onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countries.map((country,index) => {
                return <option key={index} value={country.name.common}>{country.name.common}</option>
            })}
        </select>
    )
}

export default countrySelector