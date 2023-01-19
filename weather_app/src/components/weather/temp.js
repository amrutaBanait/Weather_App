import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import WeatherCard from "./weatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Nashik");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=68e6879f536e665674e71142cacb2034`;

      const result = await fetch(url);
      const data = await result.json();
      // console.log(data);

      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
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
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      <WeatherCard {...tempInfo} />
    </>
  );
};

export default Temp;
