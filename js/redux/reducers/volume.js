import { SET_VOLUME } from '../actions/volume';

const INITIAL_STATE = {
  volume: "10",
};

/**
 * A reducer for the Gravity correction
 *
 * @param {Object} state The current state of the object.
 * @param {Object} action The current action received.
 *
 * @returns {Object} The state.
 */
function volumeReducer( state = INITIAL_STATE, action ) {
  switch( action.type ) {
    case SET_VOLUME:
      return Object.assign( {}, state, {
        volume: action.volume
      } );
    default:
      return state;
  }
}
export default volumeReducer;
