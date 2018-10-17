/**
 * Gets the proper gravity points.
 *
 * @param {number} gravity The current gravity value.
 *
 * @returns {number} The proper gravity points value.
 */
export const getGravityPoints = ( gravity ) => {
    return gravity - 1000;
};
