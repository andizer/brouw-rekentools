import { celsiusToFahrenheit } from "../calculation";

export const correctHydrometerTemperature = ( gravity, temperature, calibration ) => {
    calibration = celsiusToFahrenheit( calibration );
    temperature = celsiusToFahrenheit( temperature );

    return gravity * ((1.00130346 - 0.000134722124 * temperature + 0.00000204052596 * Math.pow(temperature, 2) - 0.00000000232820948 * Math.pow( temperature, 3)) / (1.00130346 - 0.000134722124 * calibration + 0.00000204052596 * Math.pow( calibration, 2 ) - 0.00000000232820948 * Math.pow( calibration, 3 ) ) );
};




