/**
 * Converts the given value to a floating number.
 *
 * @param {string|Number} value The value to convert.
 *
 * @returns string The converted value.
 */
export const formatAsFloat = ( value ) => {
    value = value.replace(/\D/g,'');
    value = parseFloat( value );

    if ( isNaN( value ) ) {
        return '';
    }

    return value;
};

export const formatNumber = ( number ) => {
    return number.toLocaleString(
        'nl-NL',
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );
};

export const convertToFloat = ( number ) => {
    return parseFloat( number.replace( ",", "." ) );
};

export const roundNumber = ( number ) => {
    return Math.round( number * 100 ) / 100;
};