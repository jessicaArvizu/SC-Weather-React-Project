import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
    icon: 'CLEAR_DAY',
    color: '#fafafa',
    size: 75,
    animate: true
};


export default function Icons(props) {

    const iconMapping = {
        'clear-sky-day': 'CLEAR_DAY',
        'clear-sky-night': 'CLEAR_NIGHT',
        'broken-clouds-day': 'PARTLY_CLOUDY_DAY',
        'broken-clouds-night': 'PARTLY_CLOUDY_NIGHT',
        'scattered-clouds-day': 'CLOUDY',
        "few-clouds-day": 'CLOUDY',
        'shower-rain-day': 'RAIN',
        'rain-day': 'RAIN',
        'thunderstorm-day': 'RAIN',
        'snow-day': 'SNOW',
        'mist-night': 'WIND',
        'mist-day': 'FOG'
    }

    return (
        <ReactAnimatedWeather
            icon={iconMapping[props.code]}
            color={defaults.color}
            size={props.size}
            animate={defaults.animate}
        />
    )
}

