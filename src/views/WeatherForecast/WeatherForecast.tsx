import React, { useEffect, useState } from 'react';
import Error from '../../components/Error/Error';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import WeatherListItem from './../../components/WeatherListItem/WeatherListItem';
import WeatherOverview from './../../components/WeatherOverview/WeatherOverview';
import { getTime } from '../../static/js/utils/datetime';
import getTempRange from './../../static/js/utils/getTempRange';
import kelvinsToCelsius from '../../static/js/utils/kelvinsToCelsius';
import { useWeatherData } from '../../hooks/useWeatherData';
import './WeatherForecast.scss';

const WeatherForecast: React.FC = () => {
	const [fetchData, { data, isLoading, hasError }] = useWeatherData();

	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	useEffect(() => {
		fetchData();
	}, []);

	const handleItemClick = (index: number) => {
		setSelectedItemIndex(index);
	};

	const { list, city } = data || {};
	const tempRange = list ? getTempRange(list) : { maxTemp: NaN, minTemp: NaN };

	return (
		<div className="WeatherForecast">
			{isLoading && <LoadingIndicator />}

			{hasError && <Error />}

			{list && city && list.length > 0 && (
				<>
					<WeatherOverview
						cityName={city.name}
						dateTime={list[selectedItemIndex].dt_txt}
						description={list[selectedItemIndex].weather[0].main}
						icon={list[selectedItemIndex].weather[0].icon}
						temp={kelvinsToCelsius(list[selectedItemIndex].main.temp)}
						tempMax={kelvinsToCelsius(tempRange.maxTemp)}
						tempMin={kelvinsToCelsius(tempRange.minTemp)}
					/>

					<ul className="WeatherForecast__list">
						{list.map((item, index) => {
							return (
								<li className="WeatherForecast__listItem" key={item.dt}>
									<WeatherListItem
										description={item.weather[0].main}
										icon={item.weather[0].icon}
										isActive={item.dt === list[selectedItemIndex]?.dt}
										temp={kelvinsToCelsius(item.main.temp)}
										time={getTime(item.dt_txt)}
										onClick={() => handleItemClick(index)}
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
