import { SET_MEASURED_GRAVITY, SET_TARGET_GRAVITY } from '../actions/correctGravity';

const INITIAL_STATE = {
    measured_gravity: "",
    target_gravity: "",
};

/**
 * A reducer for the Gravity correction
 *
 * @param {Object} state The current state of the object.
 * @param {Object} action The current action received.
 *
 * @returns {Object} The state.
 */
function correctGravityReducer( state = INITIAL_STATE, action ) {
    switch( action.type ) {
        case SET_MEASURED_GRAVITY:
            return Object.assign( {}, state, {
                measured_gravity: action.gravity
            } );

        case SET_TARGET_GRAVITY:
            return Object.assign( {}, state, {
                target_gravity: action.gravity
            } );
        default:
            return state;
    }
}

export default correctGravityReducer;
