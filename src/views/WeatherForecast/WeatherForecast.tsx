import React, { useEffect, useState } from 'react';
import * as Api from './../../static/js/utils/api/weatherService';
import Error from '../../components/Error/Error';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import WeatherListItem from './../../components/WeatherListItem/WeatherListItem';
import WeatherOverview from './../../components/WeatherOverview/WeatherOverview';
import { getTime } from './../../static/js/utils/dateTime';
import { WeatherItem } from './../../static/js/utils/types';
import getTempRange, { TempRange } from './../../static/js/utils/getTempRange';
import kelvinsToCelsius from '../../static/js/utils/kelvinsToCelsius';
import './WeatherForecast.scss';

const WeatherForecast: React.FC = () => {
	const [weatherList, setWeatherList] = useState<WeatherItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [selectedItem, setSelectedItem] = useState<WeatherItem | null>(null);
	const [tempRange, setTempRange] = useState<TempRange>({
		maxTemp: NaN,
		minTemp: NaN, // set appropriate defaults
	});
	const [cityName, setCityName] = useState('');

	const handleItemClick = (item: WeatherItem) => {
		setSelectedItem(item);
	};

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const response = await Api.getWeatherData();

			if (response.status === 200) {
				const { list } = response.data;
				setWeatherList(list);
				setCityName(response.data.city.name);
				setSelectedItem(list[0]);
				setTempRange(getTempRange(list));
			} else {
				setHasError(true);
			}

			setIsLoading(false);
		}

		fetchData();
	}, []);

	return (
		<div className="WeatherForecast">
			{isLoading && <LoadingIndicator />}

			{hasError && <Error />}

			{weatherList.length > 0 && (
				<>
					{selectedItem && (
						<WeatherOverview
							cityName={cityName}
							dateTime={selectedItem.dt_txt}
							description={selectedItem.weather[0].main}
							icon={selectedItem.weather[0].icon}
							temp={kelvinsToCelsius(selectedItem.main.temp)}
							tempMax={kelvinsToCelsius(tempRange.maxTemp)}
							tempMin={kelvinsToCelsius(tempRange.minTemp)}
						/>
					)}

					<ul className="WeatherForecast__list">
						{weatherList.map((item) => {
							return (
								<li className="WeatherForecast__listItem" key={item.dt}>
									<WeatherListItem
										description={item.weather[0].main}
										icon={item.weather[0].icon}
										isActive={item.dt === selectedItem?.dt}
										temp={kelvinsToCelsius(item.main.temp)}
										time={getTime(item.dt_txt)}
										onClick={() => handleItemClick(item)}
									/>
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default WeatherForecast;
