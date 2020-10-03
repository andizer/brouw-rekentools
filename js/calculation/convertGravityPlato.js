/**
 * Converts the given SG value to Plato.
 * @see https://www.winning-homebrew.com/Plato-to-specific-gravity.html
 *
 * @param {number} gravity The specific gravity value.
 *
 * @returns {number} The Plato value.
 */
export const convertGravityPlato = function( gravity ) {
    // Now we just want to have 1.065 instead of 1065.
    gravity = gravity / 1000;

    return Math.round( ( 259 - ( 259 / gravity ) ) );
};
