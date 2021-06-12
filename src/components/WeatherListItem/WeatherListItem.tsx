import React from 'react';
import './WeatherListItem.scss';

interface WeatherListItemProps {
    dateTime: number;
    temp: number;
}

const WeatherListItem = ({
    dateTime,
    temp,
}: WeatherListItemProps) => {
    return (
        <li className="WeatherListItem">
            <p>{dateTime}</p>
            <p>{temp}</p>
        </li>
    );
}

export default WeatherListItem;