import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Portland",
    date: "Thursday 2:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 34,
    wind: 9,
    temperature: 80
  };

  return (
    <div className="Weather border">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span>
                <a href="/">°F</a> | <a href="/">°C</a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
      <small><a href="https://github.com/ShyloBreanne" target="_blank" rel="noreferrer">Open-source code</a>, by Breanne Lyall</small>
    </div>
  );
}