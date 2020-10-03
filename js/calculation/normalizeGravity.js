/**
 * Normalizes the gravity value.
 *
 * @param {number} value The current value.
 *
 * @returns {number} The normalized value.
 */
export const normalizeGravity = ( value ) => {
    if ( value < 1 || ( value - 1 ) < 1 ) {
        return value * 1000;
    }

    return value;
};
