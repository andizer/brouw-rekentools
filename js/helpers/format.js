/**
 * Converts the given value to a floating number.
 *
 * @param {string|Number} value The value to convert.
 *
 * @returns string The converted value.
 */
export const formatAsFloat = ( value ) => {
    value = convertToFloat( value );

    if ( isNaN( value ) ) {
        return '';
    }

    return value;
};

export const formatNumber = ( value ) => {
    return value.toLocaleString(
        'nl-NL',
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );
};

export const convertToFloat = ( value ) => {
    return parseFloat( value.replace( ",", "." ) );
};

export const roundNumber = ( value ) => {
    return Math.round( value * 100 ) / 100;
};

/**
 * Formats the given value as percentage.
 *
 * @param result
 * @returns {string}
 */
export const formatPercentage = ( result ) => {
    if ( ! isNaN( result ) ) {
        return formatNumber( result ) + '%';
    }

    return '';
};

/**
 * Normalizes the given gravity value.
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
