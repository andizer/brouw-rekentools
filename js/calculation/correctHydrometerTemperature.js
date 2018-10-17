import { celsiusToFahrenheit } from "../calculation";

/**
 * Calculates the correct hydrometer temperature.
 *
 * @param {number} gravity     The standard gravity value.
 * @param {number} temperature The current temperature.
 * @param {number} calibration The calibration value.
 *
 * @returns {number} The hydrometer temperature.
 */
export const correctHydrometerTemperature = ( gravity, temperature, calibration ) => {
    calibration = celsiusToFahrenheit( calibration );
    temperature = celsiusToFahrenheit( temperature );

    // eslint-disable-next-line max-len
    return gravity * ((1.00130346 - 0.000134722124 * temperature + 0.00000204052596 * Math.pow(temperature, 2) - 0.00000000232820948 * Math.pow( temperature, 3)) / (1.00130346 - 0.000134722124 * calibration + 0.00000204052596 * Math.pow( calibration, 2 ) - 0.00000000232820948 * Math.pow( calibration, 3 ) ) );
};




