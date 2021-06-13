import React from 'react';
import './WeatherListItem.scss';
import getWeatherIcon from './../../static/js/utils/getWeatherIcon';
import kelvinsToCelsius from '../../static/js/utils/kelvinsToCelsius';

interface WeatherListItemProps {
    description: string;
    icon: string;
    temp: number;
    time: string;
}

const WeatherListItem = ({
    description,
    icon,
    temp,
    time,
}: WeatherListItemProps) => {
    return (
        <li className="WeatherListItem">
            <span className="WeatherListItem__time">{time}</span>
            <img
                alt={`Weather icon for ${description.toLowerCase()} forecast.`}
                className="WeatherListItem__icon"
                src={getWeatherIcon(icon, 'small')}
            />
            <span className="WeatherListItem__temp">{kelvinsToCelsius(temp)}</span>
        </li>
    );
}

export default WeatherListItem;