const kelvinsToCelsius = (kelvins: number) => {
    return <>{Math.round(kelvins - 273.15)}<span>&#176;</span></>;
}

export default kelvinsToCelsius;