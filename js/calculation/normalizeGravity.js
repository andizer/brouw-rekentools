import { formatAsFloat } from '../helpers/format';

/**
 * Normalizes the gravity value.
 *
 * @param {number|string} value The current value.
 *
 * @returns {number|string} The normalized value.
 */
export const normalizeGravity = ( value ) => {
    value = formatAsFloat( value );

    if( value === '' ) {
        return value;
    }

    if ( value < 1 || ( value - 1 ) < 1 ) {
        return value * 1000;
    }

    return value;
};
