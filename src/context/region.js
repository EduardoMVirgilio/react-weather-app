import {createContext,useState} from 'react'
const Region = ({ children }) =>{
    const [region,setRegion] = useState('america');
    return (            
            <regionContext.Provider value={{region,setRegion}}>
                {children}
            </regionContext.Provider>  
    );
}

export default Region;
export const regionContext = createContext('america');