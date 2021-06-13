import React, { useEffect, useRef, useState } from 'react';
import * as Api from './../../static/js/utils/api/weatherService';
import Error from '../../components/Error/Error';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import WeatherListItem from './../../components/WeatherListItem/WeatherListItem';
import WeatherOverview from './../../components/WeatherOverview/WeatherOverview';
import { getTime } from './../../static/js/utils/dateTime';
import { WeatherItem } from './../../static/js/utils/types';
import getTempRange, { TempRange } from './../../static/js/utils/getTempRange';
import './WeatherForecast.scss';
import wait from '../../static/js/utils/wait';

const WeatherForecast = () => {
    const [weatherList, setWeatherList] = useState([] as Array<WeatherItem>);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null as WeatherItem | null);
    const [tempRange, setTempRange] = useState({} as TempRange);

    const cityName = useRef('');

    const handleItemClick = (item: any) => {
        setSelectedItem(item)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await Api.getWeatherData();

                // Purposely wait to show loading state
                await wait(1000);

                if (response) {
                    setWeatherList(response.data.list);
                    cityName.current = response.data.city.name;
                }
                setIsLoading(false);
            } catch (error) {
                setHasError(true);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (weatherList.length > 0) {
            setSelectedItem(weatherList[0])
            setTempRange(getTempRange(weatherList));
        }
    }, [weatherList]);

    return (
        <div className="WeatherForecast">
            {isLoading &&
                <div className="WeatherForecast__loadingIndicator">
                    <LoadingIndicator/>
                </div>
            }

            {hasError &&
                <div className="WeatherForecast__error">
                    <Error/>
                </div>
            }

            {!isLoading && !hasError &&
                <>
                    {selectedItem &&
                        <WeatherOverview
                            cityName={cityName.current}
                            dateTime={selectedItem.dt_txt}
                            description={selectedItem.weather[0].main}
                            icon={selectedItem.weather[0].icon}
                            temp={selectedItem.main.temp}
                            tempMax={tempRange.maxTemp}
                            tempMin={tempRange.minTemp}
                        />
                    }

                    <ul className="WeatherForecast__list">
                        {weatherList.map((item) => {
                            return (
                                <button
                                    className={`WeatherForecast__listItem ${item.dt === selectedItem?.dt ? "isActive" : ""}`}
                                    key={item.dt}
                                    onClick={() => handleItemClick(item)}
                                >
                                    <WeatherListItem
                                        description={item.weather[0].main}
                                        icon={item.weather[0].icon}
                                        temp={item.main.temp}
                                        time={getTime(item.dt_txt)}
                                    />
                                </button>
                            );
                        })}
                    </ul>
                </>
            }
        </div>
    );
}

export default WeatherForecast;
