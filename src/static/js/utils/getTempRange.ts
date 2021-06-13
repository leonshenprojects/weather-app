import { WeatherItem } from './types';

export interface TempRange {
	maxTemp: number;
	minTemp: number;
}

const getTempRange = (weatherItems: Array<WeatherItem>): TempRange => {
	const minTemps = weatherItems.map((item) => item.main.temp_min);
	const maxTemps = weatherItems.map((item) => item.main.temp_max);

	return {
		maxTemp: Math.max(...maxTemps),
		minTemp: Math.min(...minTemps),
	};
};

export default getTempRange;
