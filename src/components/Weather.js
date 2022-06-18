


import { useState } from 'react';
import useDateWeather from './hooks/useDateWeather';



const Weather = () => {

    const {city, country,clouds, wind, pres, tempe, humidity} = useDateWeather();

    const [isCelcius,setIsCelcius] = useState(true)

    const celcius =  `${Math.round((tempe - 273.15))} ºC` ;

    const fahrenheit =  `${Math.round((tempe - 273.15) * 1.8000) + 32} ºF`


    // Btn para cambiar la unidad
    const changeUnit = () => {
        if(isCelcius){
            setIsCelcius(!isCelcius)
        }else
        
        setIsCelcius(!isCelcius)    

    }


    return (
        <div className='card'>
       
       
            <div className='title'>
            <h1> Weather App</h1>
            <h3><p>{country} {city}</p></h3>
                   
                   

            <div className='info'>
                            <div className='cloud'>

                                <i className="fas fa-cloud"><p className='grades'>{isCelcius ? celcius : fahrenheit}</p></i>
                              
                            </div>
                            
                
                            <button onClick={changeUnit} > <p className='grade'>{isCelcius ? 'Change to ºF' : 'Change to ºC'}</p></button>

            </div>
        </div>

            <div className='weather-details'>
                <h4>
                    <p><i className="fa-solid fa-smoke"></i> Clouds:</p>{ clouds }%
                </h4>
                <h4>
                    <p><i className="fas fa-wind"></i> Winds </p>{wind} 
                </h4>
                <h4>
                    <p><i className="fas fa-temperature-high"></i>Pressure:</p>{pres} 
                </h4>
                <h4>
                <p><i className="fa-solid fa-droplet"></i> Humidity</p>{humidity}
                </h4>

        </div>
        
       


        </div>
    );
};

export default Weather;