import React, { useState, useEffect } from "react";
import axios from "axios";
import MainWeather from "./MainWeather"

export default function Search(props) {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({ ready: false });

    useEffect(() => {
        const apiKey = "d09a0fd0aaod658935ba4280ebb33t01";
        const city = props.defaultCity;
        const baseUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        axios.get(baseUrl)
            .then(response => {
                setWeatherData({
                    ready: true,
                    city: response.data.city,
                    temperature: response.data.temperature.current,
                    wind: response.data.wind.speed,
                    humidity: response.data.temperature.humidity,
                    time: response.data.time,
                    description: response.data.condition.description,
                    icon_url: response.data.condition.icon_url

                });
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container">
            <form id="search-form" className="search-form">
                <div className="row">
                    <div className="col-sm-8">
                        <input
                            id="search-form-input"
                            type="search"
                            placeholder="Enter a city..."
                            required
                            className="search-form-input"
                        />
                    </div>
                    <div className="col-sm-4">
                        <input type="submit" value="Search" className="search-form-button" />
                    </div>
                </div>
            </form>
            {weatherData.ready && <MainWeather weatherData={weatherData} />}
        </div>
    );
}
