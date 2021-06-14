import { useState } from 'react';
import { WeatherApiResponse } from '../static/js/utils/types';
import * as Api from './../static/js/utils/api/weatherService';

export const useWeatherData = (): [
	() => void,
	{ data: WeatherApiResponse | null; isLoading: boolean; hasError: boolean },
] => {
	const [data, setData] = useState<WeatherApiResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	async function fetchData() {
		setIsLoading(true);
		const response = await Api.getWeatherData();

		if (response.status === 200) {
			setData(response.data);
		} else {
			setHasError(true);
		}

		setIsLoading(false);
	}

	return [fetchData, { data, isLoading, hasError }];
};
