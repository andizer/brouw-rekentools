import { getGravityPoints } from "../calculation";
import { formatAsFloat, formatNumber, normalizeGravity  } from "../helpers/format";
import { validateGravity, validateGravity } from "../validations";

/**
 * Calculates the final gravity value.
 *
 * @param {number} gravity      The current gravity value.
 * @param {number|string} attenuation  The current attenuation value.
 *
 * @returns {number|string} The final gravity value.
 */
export const calculateFinalGravity = ( gravity, attenuation ) => {
    gravity     = normalizeGravity( gravity );
    attenuation = formatAsFloat( attenuation );

    if( ! validateGravity( gravity ) ) {
        return '';
    }

    if( attenuation < 0 || attenuation > 100 ) {
        return '';
    }

    let result = gravity - ( ( getGravityPoints( gravity ) / 100 ) * attenuation );

    if ( isNaN( result ) || result > 50 ) {
        return '';
    }

    return formatNumber( result );
};
