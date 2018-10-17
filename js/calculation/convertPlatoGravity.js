/**
 * Converts the given Plato value to SG.
 *
 * @param {number} value The Plato value.
 *
 * @returns {number} The SG value.
 */
export const convertPlatoGravity = ( value ) => {
    return Math.round( ( 259 / ( 259 - value )) * 1000 );
};
