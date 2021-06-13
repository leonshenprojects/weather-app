import React, { useEffect, useRef, useState } from 'react';
import * as Api from './static/js/utils/api/weatherService';
import { WeatherItem } from './static/js/utils/types';
import WeatherListItem from './components/WeatherListItem/WeatherListItem';
import WeatherOverview from './components/WeatherOverview/WeatherOverview';
import { getTime } from './static/js/utils/dateTime';
import getTempRange, { TempRange } from './static/js/utils/getTempRange';
import './App.scss';

function App() {
    const [weatherList, setWeatherList] = useState([] as Array<WeatherItem>);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null as WeatherItem | null);
    const [tempRange, setTempRange] = useState({} as TempRange);

    const cityName = useRef('');

    const handleItemClick = (item: any) => {
        setSelectedItem(item)
    }

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const response = await Api.getWeatherData();

            if (response) {
                setWeatherList(response.data.list);
                cityName.current = response.data.city.name;
            }
            setIsLoading(false);
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
        <div className="WeatherForcastApp">
            {!isLoading &&
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

                    <ul className="WeatherFormcastApp__list">
                        {weatherList.map((item) => {
                            return (
                                <button
                                    key={item.dt}
                                    onClick={() => handleItemClick(item)}
                                >
                                    <WeatherListItem
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

export default App;
