
import axios from 'axios';
import { useEffect, useState } from 'react';
/* Code */

/* Los CustomHooks se crean en una funcion */

const useDateWeather = () => {

    /* Datos que necesito: Pais, Ciudad, icono que describa el clima, temperatura en grados
    centrigrados , boton que cambie temperatura a grados fahrenheit */

    // Creo las variables que voy a usar


            const [country,setCountry] = useState();
            const [city,setCity] = useState();
            const [clouds,setClouds] = useState();
            const [wind,setWind] = useState();
            const [pres,setPres] = useState();
            const [tempe,setTempe] = useState();
            const [humidity, setHumidity] =useState();
    

   
    
    useEffect(() => {
        
        
             const success = pos => {
            
                        //obtengo la latitud y la longitud
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;   
                
               

            //Hago la peticion a la api
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ca883810771d82a1c53115500d3468ee`)
                /* .then(res => console.log(res)); */
                .then(res => {
                    console.log(res);
                    setCountry(res.data.sys.country);
                    setCity(res.data.name);
                    setClouds(res.data.clouds.all);
                    setWind(res.data.wind.speed);
                    setPres(res.data.main.pressure);
                    setTempe(res.data.main.temp)
                    setHumidity(res.data.main.humidity);
                
                    
                });
                
                 //usamos el metodo geolocation para obtener la posicion de nuestro dispositivo. 
                 
            
        }
        
        navigator.geolocation.getCurrentPosition(success);
    
    }, [])


    return { country, city, clouds , pres, wind, tempe, humidity};
}   


/* Se tiene que exportar como un componente */

export default useDateWeather;