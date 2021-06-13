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
        <header className="WeatherOverview">
            <article className="WeatherOverview__forecast">
                <img
                    alt={`Weather icon for ${description.toLowerCase()} forecast.`}
                    className="WeatherOverview__icon"
                    src={getWeatherIcon(icon, 'large')}
                />

                <div className="WeatherOverview__forcastDetails">
                    <div className="WeatherOverview__forecastSummary">
                        <span className="WeatherOverview__description">{description}</span>
                        <span className="WeatherOverview__tempRange">
                            {tempMax && tempMin &&
                                <>{kelvinsToCelsius(tempMax)} / {kelvinsToCelsius(tempMin)}</>
                            }
                        </span>
                    </div>

                    <div className="WeatherOverview__temp">
                        {kelvinsToCelsius(temp)}
                    </div>
                </div>
            </article>

            <article className="WeatherOverview__detailsContainer">
                <div className="WeatherOverview__details">
                    <div className="WeatherOverview__city">{cityName}</div>
                    <div className="WeatherOverview__date">
                        <span>{date.day}</span>
                        <span>{date.date}. {date.month}</span>
                    </div>
                </div>
            </article>
        </header>
    );
}

export default WeatherOverview;