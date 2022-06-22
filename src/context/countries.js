import {createContext,useState,useEffect,useContext} from 'react'
import useAxios from '../hooks/useAxios';
import {regionContext} from './region';
const Countries = ({ children }) =>{
    const [countries, setCountries] = useState([]);
    const {region} = useContext(regionContext);
    const api = 'https://restcountries.com/v3.1';
    const url = `/region/${region}`;
    const method = 'get';
    const body = null;
    const headers = null; 
    const {response,error} = useAxios({api,url,method,body,headers})
    useEffect(() => {
        if(response){
            setCountries(response);
        }
    });

    return (            
            <countriesContext.Provider value={{countries, setCountries}}>
                {children}
            </countriesContext.Provider>  
    );
}

export default Countries;
export const countriesContext = createContext();