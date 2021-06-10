import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/data/2.5/forecast?q=amsterdam,NL&appid=b6907d289e10d714a6e88b30761fae22')
        .then(response => {
            setIsLoading(true);
            setData(response.data);
        })
        .catch(error => {
            setError(error);
        })
        .then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="WeatherForcast">

        </div>
    );
}

export default App;
