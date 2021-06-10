import React from 'react';
import './WeatherOverview.scss';

interface WeatherOverviewProps {
    cityName: string;
    dateTime: string;
    description: string;
    temp: number;
    tempMax: number;
    tempMin: number;
}

const WeatherOverview = ({
    cityName,
    dateTime,
    description,
    temp,
    tempMax,
    tempMin,
}: WeatherOverviewProps) => {

}

export default WeatherOverview;