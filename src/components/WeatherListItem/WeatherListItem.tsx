import React from 'react';
import './WeatherListItem.scss';
import getWeatherIcon from './../../static/js/utils/getWeatherIcon';

interface WeatherListItemProps {
	description: string;
	icon: string;
	isActive: boolean;
	temp: number;
	time: string;
	onClick(): void;
}

const WeatherListItem: React.FC<WeatherListItemProps> = ({
	description,
	icon,
	isActive,
	temp,
	time,
	onClick,
}) => {
	return (
		<button
			className={`WeatherListItem ${isActive ? 'WeatherListItem--active' : ''}`}
			onClick={onClick}
		>
			<span className="WeatherListItem__time">{time}</span>
			<img
				alt={`Weather icon for ${description.toLowerCase()} forecast.`}
				className="WeatherListItem__icon"
				src={getWeatherIcon(icon, 'small')}
			/>
			<span className="WeatherListItem__temp">{temp}&#176;</span>
		</button>
	);
};

export default WeatherListItem;
