import React from 'react';
import './WeatherOverview.scss';
import getWeatherIcon from './../../static/js/utils/getWeatherIcon';
import kelvinsToCelsius from '../../static/js/utils/kelvinsToCelsius';
import { getDate } from '../../static/js/utils/dateTime';

interface WeatherOverviewProps {
    cityName: string;
    dateTime: string;
    description: string;
    icon: string;
    temp: number;
    tempMax?: number|null;
    tempMin?: number|null;
}

const WeatherOverview = ({
    cityName,
    dateTime,
    description,
    icon,
    temp,
    tempMax,
    tempMin,
}: WeatherOverviewProps) => {
    const date = getDate(dateTime);

    return (
        <ul>
            <li>{cityName}</li>
            <li>{description}</li>
            <li>{kelvinsToCelsius(temp)}</li>
            <img
                alt=""
                className="WeatherOverviewIcon"
                src={getWeatherIcon(icon, 'large')}
            />
            {tempMax && tempMin &&
                <li>Temp Range: {kelvinsToCelsius(tempMax)}/{kelvinsToCelsius(tempMin)}</li>
            }
            <li>{date.date} {date.day} {date.month}</li>
        </ul>
    );
}

export default WeatherOverview;