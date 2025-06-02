import React from "react";
import "./style.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          class="search-input"
          id="search-input"
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
      <main>
        <div class="current-weather">
          <div>
            <h1 class="current-city" id="current-city">
              Paris
            </h1>
            <p class="current-details">
              <span id="current-date"></span>, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div class="current-temperature">
            <span class="current-temperature-icon">☀️</span>
            <span class="current-temperature-value" id="current-temperature">
              24
            </span>
            <span class="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
    </div>
  );
}
