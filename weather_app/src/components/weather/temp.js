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
      </article>
    </>
  );
}

export default temp