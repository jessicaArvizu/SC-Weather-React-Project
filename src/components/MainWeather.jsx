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
        <div className="container">
            <div className="row g-0">
                <div className="col-sm-6">
                    <div className="row">
                        <h1 id="weather-app-city" className="weather-app__city">
                            {weatherData.city}
                        </h1>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6">
                                <div className="container">
                                    <div className="row row-weather-app__temperature">
                                        <div className="col-6 d-flex justify-content-center">
                                            <div id="weather-app-temperature" className="weather-app__temperature">
                                                {isCelsius ? celsiusTemperature + "°C" : fahrenheitTemperature + "°F"}
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center">
                                            <div className="weather-app__unit" onClick={toggleUnit} style={{ cursor: 'pointer' }}>
                                                {isCelsius ? "°C | °F" : "°C | °F"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center flex-column">
                            <div id="weather-app-icon" className="weather-app__icon custom-icon w-100 p-0 text-center">
                                <Icons code={weatherData.icon} alt={weatherData.description} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-weather-details custom-details">
                <p className="weather-app__details text-center w-100 ">
                    <span id="time" className="text-capitalize">{formatTime(weatherData.time)}</span>,
                    <span id="weather-description" className="text-capitalize">{weatherData.description}</span>,
                    Humidity: <strong id="weather-humidity">{weatherData.humidity}%</strong>,
                    Wind: <strong id="weather-wind">{weatherData.wind}km/h</strong>
                </p>
            </div>
            <Forecast city={weatherData.city} />
        </div>

    );
};

export default WeatherDisplay;
