import { connect } from 'react-redux';

import HydrometerTemperatureCorrection from '../../composites/HydrometerTemperature';
import { setTemperature, setCalibration } from '../actions/hydrometerTemperature';
import { setGravity } from "../actions/gravity";

function mapStateToProps( state ) {
    return {
        gravity: state.Gravity.gravity,
        temperature: state.HydrometerTemperature.temperature,
        calibration: state.HydrometerTemperature.calibration,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        setGravity: (event) => {
            dispatch( setGravity( event.target.value ) );
        },
        setTemperature: (event) => {
            dispatch( setTemperature( event.target.value ) );
        },
        setCalibration: (event) => {
            dispatch( setCalibration( event.target.value ) );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( HydrometerTemperatureCorrection );
