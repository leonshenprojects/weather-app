import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import WeatherListItem from './WeatherListItem';

const defaultProps = {
    description: "Sunny",
    icon: "01d",
    isActive: false,
    temp: 20,
    time: '12:00',
    onClick: jest.fn(),
}

describe('WeatherListItem', () => {
    it('should render a WeatherListItem', () => {
        render(
            <WeatherListItem
                {...defaultProps}
            />
        )

        expect(screen.getByText(defaultProps.time)).toBeInTheDocument();

        const image = screen.getByAltText(`Weather icon for sunny forecast.`);
        expect(image).toHaveAttribute('src', 'weather-sun.svg');

        expect(screen.getByText('20°')).toBeInTheDocument();
    });

    it('should execute callback on click', () => {
        const spy = jest.fn();

        render(
            <WeatherListItem
                {...defaultProps}
                onClick={spy}
            />
        )

        fireEvent.click(screen.getByRole('button'));

        expect(spy).toHaveBeenCalled();
    });
});