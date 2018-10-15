import { SET_COLOR_EBC, SET_COLOR_LOVIBOND, SET_COLOR_SRM } from "../actions/color";

const INITIAL_STATE = {
    colorEBC: "",
    colorLovibond: "",
    colorSRM: "",
};

const colorReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case SET_COLOR_EBC:
            return Object.assign( {}, state, {
                colorEBC: action.colorEBC,
                colorLovibond: "",
                colorSRM: ""
            } );

        case SET_COLOR_LOVIBOND:
            return Object.assign( {}, state, {
                colorEBC: "",
                colorLovibond: action.colorLovibond,
                colorSRM: action.colorSRM
            } );

        case SET_COLOR_SRM:
            return Object.assign( {}, state, {
                colorEBC: "",
                colorLovibond: "",
                colorSRM: action.colorSRM
            } );
        default:
            return state;
    }
};

export default colorReducer;