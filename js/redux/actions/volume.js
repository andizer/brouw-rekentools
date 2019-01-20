export const SET_VOLUME = "SET_VOLUME";

export const setVolume = function( volume ) {
  return {
    type: SET_VOLUME,
    volume
  }
};
