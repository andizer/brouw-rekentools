
/**
 * The weight ranges in grams.
 *
 * @type {{min: number, max: number}}
 */
export const weightRanges = {
  min: 1,
  max: 5000000,
};

export const weightIsInRange =( value ) => {
  return ( value >= weightRanges.min && value <= weightRanges.max );
};
