import React from 'react'
import "./style.css";
import {useState, useEffect} from 'react';

const Temp = () => {
const [searchValue, setSearchValue] = useState("Nashik") 

const getWeatherInfo = async() =>{
try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=68e6879f536e665674e71142cacb2034`

    const result = await fetch(url);
    const data = await result.json();
    // console.log(data);

    const {temp,pressure,humidity} = data.main;
    const { main:weathermood } = data.weather[0]
    const {name} = data;
    const {speed} = data.wind
    const {country, sunset} = data.sys
   
    const myNewWeatherInfo = {
      temp,
      pressure,
      humidity,
      weathermood,
      name,
      speed,
      country,
      sunset
    };
    
}catch(error){
  console.log(error, "error")
}
}

useEffect (() =>{
  getWeatherInfo()
},[])
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            autofocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button 
          className="searchButton" 
          type="button"
          onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/*temp card*/}
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"> </i>
        </div>
        
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
              
            <div className="place">Nashik,India</div>
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
                20.20
                Sunset
            </p>
            </div>

               <div className="two-sided-section">
            <p>
              <i className="wi wi-humidity"> </i>
            </p>
            <p className="extra-info-leftside">
                20.20
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
                20.20
              Pressure
            </p>
            </div>
             <div className="two-sided-section">
            <p>
              <i className="wi wi-strong-wind"> </i>
            </p>
            <p className="extra-info-leftside">
                20.20
                Speed
            </p>
            </div>
          </div>
         </div>
      </article>
    </>
  );
}

export default Temp