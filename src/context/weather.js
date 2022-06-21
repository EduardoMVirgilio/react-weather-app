import {createContext,useState,useEffect,useContext} from 'react'
import useAxios from '../hooks/useAxios';
import {countryContext} from './country';
const Weather = ({ children }) =>{
    const [data, setData] = useState(null);
    const {country} = useContext(countryContext);
    const api = 'https://weatherdbi.herokuapp.com/data';
    const url = `/weather/${country}`;
    const method = 'get';
    const body = null;
    const headers = null; 
    const {response,loading} = useAxios({api,url,method,body,headers})


    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]); 

    return (            
            <weatherContext.Provider value={{data,setData,loading}}>
                {children}
            </weatherContext.Provider>  
    );
}

export default Weather;
export const weatherContext = createContext();