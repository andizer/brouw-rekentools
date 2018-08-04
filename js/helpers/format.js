/**
 * Converts the given value to a floating number.
 *
 * @param {string|Number} value The value to convert.
 *
 * @returns string The converted value.
 */
export const formatAsFloat = ( value ) => {
    value = parseFloat( value.replace(/\D/g,'') );

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