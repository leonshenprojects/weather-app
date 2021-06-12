interface Coordinates {
    lat: number;
    lon: number;
}

interface City {
    cood: Coordinates;
    country: string;
    id: number;
    name: string;
}

interface MainWeatherData {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}

interface WeatherDetails {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Wind {
    speed: number;
    deg: number;
}

export interface WeatherItem {
    clouds: {all: number};
    dt: number;
    dt_txt: string;
    main: MainWeatherData;
    sys: {pod: string};
    weather: Array<WeatherDetails>;
    wind: Wind;
}

export interface WeatherApiResponse {
    city: City;
    cnt: number;
    cod: string;
    list: Array<WeatherItem>;
    message: number;
}
