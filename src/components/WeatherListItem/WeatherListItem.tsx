import React from 'react';
import './WeatherListItem.scss';
import getWeatherIcon from './../../static/js/utils/getWeatherIcon';
import kelvinsToCelsius from '../../static/js/utils/kelvinsToCelsius';

interface WeatherListItemProps {
    icon: string;
    temp: number;
    time: string;
}

const WeatherListItem = ({
    icon,
    temp,
    time,
}: WeatherListItemProps) => {
    return (
        <li className="WeatherListItem">
            <p>{time}</p>
            <img
                alt=""
                src={getWeatherIcon(icon, 'small')}
            />
            <p>{kelvinsToCelsius(temp)}</p>
        </li>
    );
}

export default WeatherListItem;