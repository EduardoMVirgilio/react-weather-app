import {useContext,useState,useEffect} from 'react';
import {countryContext} from '../context/country';
import useAxios from '../hooks/useAxios';
import '../style/data.css';
const Data = () => {
    const[data,setData] = useState(null);
    const {country} = useContext(countryContext);
     const {response,loading,error} = useAxios({
        api:'http://api.weatherapi.com/v1/current.json',
        url:`?key=84d3eff60ea5407a99a184524222206&q=${country}`,
        method:'get',
        body:null,
        headers:null
    });
    useEffect(() => {
        if(response){
            setData(response);
        }
    },[response,loading,error]); 
    return (
        <section className="weather">
            { data && <h1 className='weather__region'>{data.location.region}</h1>}
            <figure className='weather__figure'>
            { data && data.currentConditions && <img src={data.current.condition.icon} alt={data.current.condition.text} />}
            </figure>
            <article className='weather__data'>
            { data && data.currentConditions && <h2>T: {data.current.temp_c} &#8451;</h2>}
            { data && data.currentConditions && <h2>H: {data.current.humidity}</h2> }
            { data && data.currentConditions && <h2>State: {data.current.condition.text}</h2>}
            </article>
        </section>
    )
}

export default Data
