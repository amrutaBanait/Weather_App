import React from 'react'
import {useState, useEffect} from "react";
{/*temp card*/}
      
const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("")
   const {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset
      } = tempInfo;

    //to show weather icon
      useEffect( () =>{
        if(weathermood){
            switch (weathermood){
                case "Clouds": 
                setWeatherState("wi-day-cloudy")
                    break;
                    case "Haze": 
                setWeatherState("wi-fog")
                    break;
                    case "Clear": 
                setWeatherState("wi-day-sunny")
                    break;
                    default:
                        setWeatherState("wi-day-sunny")
                        break;
            }
        }
      }, [weathermood])

      //converting seconds into time
        let sec = sunset;
        let date = new Date(sec * 1000);
        let timeStr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
    <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"> </i>
        </div>
        
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
              
            <div className="place">{name},{country}</div>
          </div>
        </div>

         {/* <div className="date">{new Date().toLocalString()}</div>  */}

         {/* 4 column section */}
         
         <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
            <p>
              <i className="wi wi-sunset"> </i>
            </p>
            <p className="extra-info-leftside">
                {timeStr} PM <br/>
                Sunset
            </p>
            </div>

               <div className="two-sided-section">
            <p>
              <i className="wi wi-humidity"> </i>
            </p>
            <p className="extra-info-leftside">
              {humidity} <br/>
                Humidity
            </p>
            </div>
          </div>


          <div className="weather-extra-info">
             <div className="two-sided-section">
            <p>
              <i className="wi wi-rain"> </i>
            </p>
            <p className="extra-info-leftside">
               {pressure} <br/>
              Pressure
            </p>
            </div>
             <div className="two-sided-section">
            <p>
              <i className="wi wi-strong-wind"> </i>
            </p>
            <p className="extra-info-leftside">
               {speed} <br/>
                Speed
            </p>
            </div>
          </div>
         </div>
      </article>
        </>
    )
}

export default WeatherCard;