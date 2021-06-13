import { WeatherItem } from "./types";

export interface TempRange {
    maxTemp: number|null;
    minTemp: number|null;
}

const getTempRange = (weatherItems: Array<WeatherItem>) => {
    let maxTemp: TempRange['maxTemp'] = null;
    let minTemp: TempRange['minTemp'] = null;

    weatherItems.forEach(item => {
        if (!maxTemp) {
            maxTemp = item.main.temp_max;
        }

        if (!minTemp) {
            minTemp = item.main.temp_min;
        }

        if (item.main.temp_max > maxTemp) {
            maxTemp = item.main.temp_max;
        }

        if (item.main.temp_min < minTemp) {
            minTemp = item.main.temp_min;
        }
    });

    return {
        maxTemp: maxTemp,
        minTemp: minTemp,
    }
}

export default getTempRange;