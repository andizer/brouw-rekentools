/**
 * These are the ranges which will make sense.
 *
 * @type {{min: number, max: number}}
 */
export const temperatureRanges = {
  min: 0,
  max: 100,
};

export const temperatureIsInRange = ( value ) => {
  return ( value >= temperatureRanges.min && value <= temperatureRanges.max );
};

export const validateTemperature = ( temperature ) => {
  return ( temperature !== '' && temperatureIsInRange( temperature ) );
};
