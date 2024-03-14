import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
    icon: 'CLEAR_DAY',
    color: '#924da2',
    size: 100,
    animate: true
};

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
    return (
        <div className="container">
            <div className="row g-0">
                <div className="col-sm-6">
                    <div className="row">
                        <h1 id="weather-app-city" className="weather-app-city">
                            {weatherData.city}
                        </h1>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6">
                                <div className="container">
                                    <div className="row row-weather-app-temperature">
                                        <div className="row g-0 row-weather-app-temperature">
                                            <div className="col-6 d-flex justify-content-center">
                                                <div id="weather-app-temperature" className="weather-app-temperature">
                                                    {Math.round(weatherData.temperature)}
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex justify-content-center">
                                                <div id="weather-app-unit" className="weather-app-unit">
                                                    °C
                                                </div>
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
                            <div id="weather-app-icon" className="weather-app-icon custom-icon w-100 p-0 text-center">
                                <ReactAnimatedWeather
                                    icon={defaults.icon}
                                    color={defaults.color}
                                    size={defaults.size}
                                    animate={defaults.animate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-weather-details custom-details">
                <p className="weather-app-details text-center w-100 ">
                    <span id="time" className="text-capitalize">{formatTime(weatherData.time)}</span>,
                    <span id="weather-description" className="text-capitalize">{weatherData.description}</span>,
                    Humidity: <strong id="weather-humidity">{weatherData.humidity}%</strong>,
                    Wind: <strong id="weather-wind">{weatherData.wind}km/h</strong>
                </p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
