import sun from './../../assets/svg/weather-sun.svg';
import sunWithCloud from './../../assets/svg/weather-sun-cloud.svg';

const customIcons: { [key: string]: string } = {
	'01d': sun,
	'02d': sunWithCloud,
};

const getWeatherIcon = (iconId: string, size: 'small' | 'large'): string => {
	if (customIcons[iconId]) {
		return customIcons[iconId];
	}

	// default to fetching generic icons from weather API if we do not have a custom icon
	return `https://openweathermap.org/img/wn/${iconId}${
		size === 'large' ? '@2x' : ''
	}.png`;
};

export default getWeatherIcon;
