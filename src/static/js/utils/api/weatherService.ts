import axios, { AxiosResponse } from 'axios';
import { WeatherApiResponse } from '../types';

export const getWeatherData = async (): Promise<
	AxiosResponse<WeatherApiResponse>
> => {
	const response: AxiosResponse<WeatherApiResponse> = await axios.get(
		'/data/2.5/forecast',
		{
			params: {
				q: 'M%C3%BCnchen,DE',
				appid: 'b6907d289e10d714a6e88b30761fae22',
			},
		},
	);

	return response;
};
