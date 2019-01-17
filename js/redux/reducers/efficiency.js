import { SET_EFFICIENCY } from '../actions/efficiency';

const INITIAL_STATE = {
  efficiency: "75",
};

/**
 * A reducer for the Gravity correction
 *
 * @param {Object} state The current state of the object.
 * @param {Object} action The current action received.
 *
 * @returns {Object} The state.
 */
function efficiencyReducer( state = INITIAL_STATE, action ) {
  switch( action.type ) {
    case SET_EFFICIENCY:
      return Object.assign( {}, state, {
        efficiency: action.efficiency
      } );
    default:
      return state;
  }
}
export default efficiencyReducer;
