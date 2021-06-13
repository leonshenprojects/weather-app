import sun from './../../assets/svg/weather-sun.svg';
import sunWithCloud from './../../assets/svg/weather-sun-cloud.svg';

const customIcons: {[key: string]: string} = {
    '01d': sun,
    '02d': sunWithCloud,
}

const getWeatherIcon = (iconId: string, size: 'small' | 'large') => {
    if (customIcons[iconId]) {
        return customIcons[iconId];
    }

    let iconSize = ''

    if (size === 'large') {
        iconSize = '@2x';
    }

    return `https://openweathermap.org/img/wn/${iconId}${iconSize}.png`;
}

export default getWeatherIcon