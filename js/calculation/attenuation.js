
/**
 *
 * @param originalGravity
 * @param finalGravity
 * @returns {*}
 */
export const calculateAttenuation = ( originalGravity, finalGravity ) => {
    return Math.round( ( ( originalGravity - finalGravity ) / ( originalGravity - 1000 ) ) * 100 );
};