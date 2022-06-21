import {useContext} from 'react';
import {weatherContext} from '../context/weather';
const Data = () => {
    const context = useContext(weatherContext);
    const {data,loading} = context;
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            { data && data.currentConditions && <img src={data.currentConditions.iconURL} alt={data.currentConditions.comment} />}
            { data && <h1>{data.region}</h1>}
            { data && data.currentConditions && <h1>T: {data.currentConditions.temp.c}</h1>}
            { data && data.currentConditions && <h2>H:{data.currentConditions.humidity}</h2> }
            { data && data.currentConditions && <h2>State:{data.currentConditions.comment}</h2>}
        </div>
    )
}

export default Data