/**
 * Converts the temperature in Celsius to Fahrenheit.
 *
 * @param {number} temperatureInCelsius The temperature in Celcius.
 *
 * @returns {number} The temperature in Fahrenheit.
 */
export const celsiusToFahrenheit = ( temperatureInCelsius ) => {
    return ( temperatureInCelsius * 1.8 ) + 32;
};
