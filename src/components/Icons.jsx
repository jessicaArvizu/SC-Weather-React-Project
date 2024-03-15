import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
    icon: 'CLEAR_DAY',
    color: '#924da2',
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
        'rain-day': 'RAIN',
        'rain-night': 'SLEET',
        'snow-day': 'SNOW',
        'mist-night': 'WIND',
        'mist-day': 'FOG'
    }

    return (
        <ReactAnimatedWeather
            icon={iconMapping[props.code]}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
        />
    )
}

