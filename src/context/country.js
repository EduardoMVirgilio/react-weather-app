import {createContext,useState} from 'react'
const Country = ({ children }) =>{
    const [country,setCountry] = useState(null);
    return (            
            <countryContext.Provider value={{country,setCountry}}>
                {children}
            </countryContext.Provider>  
    );
}

export default Country;
export const countryContext = createContext();