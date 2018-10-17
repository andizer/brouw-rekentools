
/**
 * Calculates the attenuation.
 *
 * @param {number} originalGravity  The original gravity.
 * @param {number} finalGravity     The final gravity.
 *
 * @returns {number} The attenuation.
 */
export const calculateAttenuation = ( originalGravity, finalGravity ) => {
    return Math.round( ( ( originalGravity - finalGravity ) / ( originalGravity - 1000 ) ) * 100 );
};
