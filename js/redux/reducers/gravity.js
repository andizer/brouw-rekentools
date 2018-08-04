import { SET_ORIGINAL_GRAVITY, SET_FINAL_GRAVITY, SET_GRAVITY } from '../actions/gravity';

const INITIAL_STATE = {
    original_gravity: "",
    final_gravity: "",
    gravity: ","
};

const gravityReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case SET_ORIGINAL_GRAVITY:
            return Object.assign( {}, state, {
                original_gravity: action.gravity
            } );

        case SET_FINAL_GRAVITY:
            return Object.assign( {}, state, {
                final_gravity: action.gravity
            } );

        case SET_GRAVITY:
            return Object.assign( {}, state, {
                gravity: action.gravity
            } );
        default:
            return state;
    }
};

export default gravityReducer;