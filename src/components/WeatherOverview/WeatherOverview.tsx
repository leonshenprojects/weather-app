import React from 'react';
import './WeatherOverview.scss';
import getWeatherIcon from './../../static/js/utils/getWeatherIcon';
import { getDate } from '../../static/js/utils/dateTime';

interface WeatherOverviewProps {
	cityName: string;
	dateTime: string;
	description: string;
	icon: string;
	temp: number;
	tempMax: number;
	tempMin: number;
}

const WeatherOverview: React.FC<WeatherOverviewProps> = ({
	cityName,
	dateTime,
	description,
	icon,
	temp,
	tempMax,
	tempMin,
}) => {
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
							{isFinite(tempMax) && isFinite(tempMin) && (
								<>
									{tempMax}&#176; / {tempMin}&#176;
								</>
							)}
						</span>
					</div>

					<div className="WeatherOverview__temp">{temp}&#176;</div>
				</div>
			</article>

			<article className="WeatherOverview__detailsContainer">
				<div className="WeatherOverview__details">
					<div className="WeatherOverview__city">{cityName}</div>
					<div className="WeatherOverview__date">
						<span>{date.weekday}</span>
						<span>
							{date.day}. {date.month}
						</span>
					</div>
				</div>
			</article>
		</header>
	);
};

export default WeatherOverview;
