import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import axios from "axios";

export default function Forecast(props) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [dailyForecast, setDailyForecast] = useState([]);

    useEffect(() => {
        const apiKey = 'd09a0fd0aaod658935ba4280ebb33t01';
        const baseUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

        axios.get(baseUrl)
            .then(response => {
                const nextFiveDaysData = response.data.daily.slice(0, 5);
                setDailyForecast(nextFiveDaysData);
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [props.city]);

    return (
        <div className="forecast forecast--row">
            <div id="weekly-forecast" className="forecast__weekly-forecast">
                <div className="row forecast__daily-container">
                    {dailyForecast.map((dayData, index) => (
                        <div key={index} className="col forecast__daily">
                            <div className="forecast__daily-content text-center">
                                <div className="forecast__day">{daysOfWeek[(new Date(dayData.time * 1000)).getDay()]}</div>
                                <Icons code={dayData.condition.icon} alt={dayData.condition.description} size={36} />
                                <div className="forecast__temperature">
                                    <span className="forecast__temperature-max">°{Math.round(dayData.temperature.maximum)}</span>
                                    <span className="forecast__temperature-min">°{Math.round(dayData.temperature.minimum)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
