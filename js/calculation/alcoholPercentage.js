import { normalizeGravity } from '../calculation';

/**
 * Calculates the percentage of alcohol based on the original and final gravity.
 *
 * @param {number} originalGravity  The original gravity.
 * @param {number} finalGravity     The final gravity.
 *
 * @returns {number} The percentage of alcohol.
 */
export const calculateAlcoholPercentage = ( originalGravity, finalGravity ) => {
   return ( ( normalizeGravity( originalGravity ) - normalizeGravity( finalGravity ) ) * 131.5 );
};
