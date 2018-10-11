import { normalizeGravity } from '../calculation';

/**
 *
 * @param {number} originalGravity
 * @param {number} finalGravity
 * @returns {number}
 */
export const calculateAlcoholPercentage = ( originalGravity, finalGravity ) => {
   return ( ( normalizeGravity( originalGravity ) - normalizeGravity( finalGravity ) ) * 131.5 );
};