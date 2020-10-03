export const SET_EFFICIENCY = "SET_EFFICIENCY";

export const setEfficiency = function( efficiency ) {
  return {
    type: SET_EFFICIENCY,
    efficiency
  }
};
