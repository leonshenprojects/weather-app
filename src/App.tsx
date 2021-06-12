import React, { useEffect, useRef, useState } from 'react';
import * as Api from './static/js/utils/api/weatherService';
import { WeatherItem } from './static/js/utils/types';
import WeatherListItem from './components/WeatherListItem/WeatherListItem';
import WeatherOverview from './components/WeatherOverview/WeatherOverview';
import './App.scss';

function App() {
    const [weatherList, setWeatherList] = useState([] as Array<WeatherItem>);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null as WeatherItem | null);

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
        }
    }, [weatherList]);

    return (
        <div className="WeatherForcastApp">
            {!isLoading &&
                <>
                    {selectedItem &&
                        <WeatherOverview
                            cityName={cityName.current}
                            dateTime={selectedItem?.dt}
                            description={selectedItem?.weather[0].main}
                            temp={selectedItem?.main.temp}
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
                                        dateTime={item.dt}
                                        temp={item.main.temp}
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
