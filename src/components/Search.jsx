import React, { useState, useEffect } from "react";
import axios from "axios";
import MainWeather from "./MainWeather";

export default function Search(props) {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    useEffect(() => {
        if (!city) return;

        const apiKey = "d09a0fd0aaod658935ba4280ebb33t01";
        const baseUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        setLoading(true);

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
                    icon: response.data.condition.icon,
                    icon_url: response.data.condition.icon_url
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [city]);

    function handleSubmit(e) {
        e.preventDefault();
        const newCity = e.target.elements.city.value.trim();
        if (newCity) {
            setCity(newCity);
        }
    }

    return (
        <div>
            <form id="search-form" className="search-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-8">
                        <input
                            id="search-form-input"
                            type="search"
                            placeholder="Enter a city..."
                            required
                            className="search-form__input"
                            name="city"
                        />
                    </div>
                    <div className="col-sm-4">
                        <button type="submit" className="search-form__button">Search</button>
                    </div>
                </div>
            </form>
            {loading ?
                <div className="spinner-border text-light" role="status"></div>
                : weatherData.ready && <MainWeather weatherData={weatherData} />}
        </div>
    );
}
