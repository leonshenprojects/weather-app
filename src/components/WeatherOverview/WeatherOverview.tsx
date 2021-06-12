import React from 'react';
import './WeatherOverview.scss';

interface WeatherOverviewProps {
    cityName: string;
    dateTime: number;
    description: string;
    temp: number;
    tempMax?: number;
    tempMin?: number;
}

const WeatherOverview = ({
    cityName,
    dateTime,
    description,
    temp,
    tempMax,
    tempMin,
}: WeatherOverviewProps) => {
    return (
        <ul>
            <li>{cityName}</li>
            <li>{dateTime}</li>
            <li>{description}</li>
            <li>{temp}</li>
        </ul>
    );
}

export default WeatherOverview;