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
