import { normalizeGravity } from "../calculation";

/**
 * Converts the given SG value to Plato.
 * @see https://www.winning-homebrew.com/Plato-to-specific-gravity.html
 *
 * @param {number} gravity The specific gravity value.
 *
 * @returns {number} The Plato value.
 */
export const convertGravityPlato = function(gravity ) {
    return Math.round( ( 259 - ( 259 / normalizeGravity( gravity ) ) ) );

    // 259-(259/SG) & SG=259/(259-degrees P)
    // (-1 * 616.868) + (1111.14 * sg) – (630.272 * sg^2) + (135.997 * sg^3)
    // + (plato / (258.6 – ( (plato/258.2) *227.1) ) )
    // return Math.round( ( 1 + ( value / ( 258.6 - 0.87955 * value ) ) ) * 1000 );
    //return Math.round( ( value - 1000 ) / 4 );
};
