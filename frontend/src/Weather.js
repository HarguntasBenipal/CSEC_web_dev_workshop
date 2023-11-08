// Weather.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [userInput, setUserInput] = useState(""); // New state for user input
  const [inputColor, setInputColor] = useState("black"); // New state for input color

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '9fbfb4c21f13700376f6050045993ca4'; //9fbfb4c21f13700376f6050045993ca4
    const city = userInput;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data)
        //setWeatherData(mockData);
      })
      .catch((error) => {

        setWeatherData(mockData);
        //console.error(error);
      });
  }, [userInput]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput)
    setInputColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`); // Change color on each input
  };

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData && (
        <div>
          <p>Temperature: {(weatherData.main.temp) - 273.15}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather icon"
          />{" "}
          {/* New image element */}
        </div>
      )}
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        style={{ color: inputColor }}
      />{" "}
      {/* New text box for user input */}
      <p style={{ color: inputColor }}>{userInput}</p>{" "}
      {/* Display user input */}
    </div>
  );
}

export default Weather;

const mockData = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    "1h": 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: "IT",
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};
