import {useContext,useState,useEffect} from 'react';
import {countryContext} from '../context/country';
import useAxios from '../hooks/useAxios';
import '../style/data.css';
const Data = () => {
    const[data,setData] = useState(null);
    const {country} = useContext(countryContext);
     const {response,loading,error} = useAxios({
        api:'https://weatherdbi.herokuapp.com/',
        url:`/data/weather/${country}`,
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
            { data && <h1 className='weather__region'>{data.region}</h1>}
            <figure className='weather__figure'>
            { data && data.currentConditions && <img src={data.currentConditions.iconURL} alt={data.currentConditions.comment} />}
            </figure>
            <article className='weather__data'>
            { data && data.currentConditions && <h2>T: {data.currentConditions.temp.c} &#8451;</h2>}
            { data && data.currentConditions && <h2>H: {data.currentConditions.humidity}</h2> }
            { data && data.currentConditions && <h2>State: {data.currentConditions.comment}</h2>}
            </article>
        </section>
    )
}

export default Data