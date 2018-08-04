
import {formatAsFloat} from "../helpers/format";
import {celsiusToFahrenheit, temperatureIsInRange} from "../helpers/temperature";
import {validateGravity} from "../validations/gravity";

export const correctHydrometerTemperature = ( gravity, temperature, calibration ) => {
    gravity     = formatAsFloat( gravity );
    temperature = formatAsFloat( temperature );
    calibration = formatAsFloat( calibration );

    if ( gravity === '' || temperature === '' || calibration === '' ) {
        return '';
    }

    if ( ! validateGravity( gravity ) || ! temperatureIsInRange( temperature ) || ! temperatureIsInRange( calibration ) ) {
        return '';
    }

    calibration = celsiusToFahrenheit( calibration );
    temperature = celsiusToFahrenheit( temperature );

    let result = gravity * ((1.00130346 - 0.000134722124 * temperature + 0.00000204052596 * Math.pow(temperature, 2) - 0.00000000232820948 * Math.pow( temperature, 3)) / (1.00130346 - 0.000134722124 * calibration + 0.00000204052596 * Math.pow( calibration, 2 ) - 0.00000000232820948 * Math.pow( calibration, 3 ) ) );

    if ( isNaN( result ) || result === '' ) {
        return '';
    }

    return Math.round( result ).toString();
};




