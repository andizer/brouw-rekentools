import { SET_TEMPERATURE, SET_CALIBRATION } from '../actions/hydrometerTemperature';

const INITIAL_STATE = {
    temperature: "",
    calibration: "20",
};

const hydrometerTemperatureReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case SET_TEMPERATURE:
            return Object.assign( {}, state, {
                temperature: action.temperature
            } );

        case SET_CALIBRATION:
            return Object.assign( {}, state, {
                calibration: action.calibration
            } );
        default:
            return state;
    }
};

export default hydrometerTemperatureReducer;