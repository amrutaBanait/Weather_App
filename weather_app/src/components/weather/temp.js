import React from 'react'
import "./style.css";

const temp = () => {
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
          />
          <button className="searchButton" type="button">
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

export default temp