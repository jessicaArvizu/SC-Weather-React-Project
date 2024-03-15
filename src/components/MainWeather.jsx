import React, { useState } from "react";
import Icons from "./Icons";
import Forecast from "./Forecast";

const formatTime = (timestamp) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(timestamp * 1000);
    const day = daysOfWeek[date.getDay()];
    const hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const formattedTime = day + ', ' + hours + ':' + minutes;
    return formattedTime;
};

const WeatherDisplay = ({ weatherData }) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const celsiusTemperature = Math.round(weatherData.temperature);
    const fahrenheitTemperature = Math.round((weatherData.temperature * 9 / 5) + 32);

    const toggleUnit = () => {
        setIsCelsius(!isCelsius);
    };

    return (
        <div className="main-weather">
            <div className="row g-0">
                <h1 id="weather-app-city" className="main-weather__city">
                    {weatherData.city}
                </h1>
                <div className="col col-sm-6">
                    <div className="col-sm-6 w-100">
                        <div className="row text-center">
                            <div className="col-6 w-100">
                                <div className="main-weather__temperature">
                                    {isCelsius ? celsiusTemperature + "°C" : fahrenheitTemperature + "°F"}
                                </div>
                            </div>
                            <div className="col-6 w-100">
                                <div className="main-weather__unit" onClick={toggleUnit}>
                                    {isCelsius ? "°C | °F" : "°C | °F"}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col col-sm-6 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <Icons code={weatherData.icon} alt={weatherData.description} size={100} />
                    </div>
                </div>

            </div>
            <div className="row weather-details">
                <p className="weather-details__text text-center w-100 ">
                    <span className="text-capitalize">{formatTime(weatherData.time)}</span> | 
                    <span className="text-capitalize"> {weatherData.description}</span> |
                    Humidity: <strong id="weather-humidity">{weatherData.humidity}%</strong> |
                    Wind: <strong id="weather-wind">{weatherData.wind}km/h</strong>
                </p>
            </div>
            <Forecast city={weatherData.city} />
        </div>
    );
};

export default WeatherDisplay;
