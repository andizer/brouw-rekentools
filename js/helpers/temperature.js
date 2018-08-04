/**
 * These are the ranges which will make sense.
 * @type {{min: number, max: number}}
 */
export const temperatureRanges = {
    min: 0,
    max: 100
};

export const temperatureIsInRange =( value ) => {
    return ( value >= temperatureRanges.min && value <= temperatureRanges.max );
};

export const celsiusToFahrenheit = ( temperatureInCelsius ) => {
    return ( temperatureInCelsius * 1.8 ) + 32;
};
