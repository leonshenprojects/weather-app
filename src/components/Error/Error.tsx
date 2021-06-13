import React from 'react';
import './Error.scss';

const Error = () => {
    return (
        <div className="Error">
            <p>We are not able to give you the weather forecast right now.</p>
            <p>Please try again later.</p>
        </div>
    );
}

export default Error;