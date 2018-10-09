import React from "react";
import PropTypes from "prop-types";

import { Gravity, Temperature } from '../components';
import { FormGroup, StaticFormGroup } from './form';

import { correctHydrometerTemperature } from "../calculation/correctHydrometerTemperature";

const calculate = ( gravity, temperature, calibration ) => {
    if ( gravity === '' || temperature === '' || calibration === '' ) {
        return '';
    }

    return correctHydrometerTemperature( gravity, temperature, calibration );
};

const CorrectGravity = ( props ) => {
    const { gravity, temperature, calibration } = props;

    let result = calculate( gravity, temperature, calibration );

    return (
        <div className="form-horizontal">
            <FormGroup id="gravity" label="Gemeten SG">
                <Gravity
                    className="form-control"
                    id="gravity"
                    name='gravity'
                    onChange={ props.setGravity }
                    gravity={ props.gravity }
                    placeholder="Gemeten SG"
                />
            </FormGroup>
            <FormGroup id="temperature" label="Temperatuur tijdens meting">
                <Temperature
                    className="form-control"
                    id="temperature"
                    name='temperature'
                    onChange={ props.setTemperature }
                    temperature={ props.temperature }
                    placeholder="Temperatuur tijdens meting (celsius)"
                />
            </FormGroup>
            <FormGroup id="calibration" label="Gekalibreerde temperatuur">
                <Temperature
                    className="form-control"
                    id="calibration"
                    name='calibration'
                    onChange={ props.setCalibration }
                    temperature={ props.calibration }
                    placeholder="Gekalibreerde temperatuur (celsius)"
                />
            </FormGroup>
            <StaticFormGroup id="correctHydrometerTemperatureResult" label="Bijgesteld SG" value={ result } />
        </div>
    );
};

CorrectGravity.propTypes = {
    setGravity: PropTypes.func.isRequired,
    setTemperature: PropTypes.func.isRequired,
    setCalibration: PropTypes.func.isRequired,
    gravity: PropTypes.string,
    temperature: PropTypes.string,
    calibration: PropTypes.string,
};

CorrectGravity.defaultProps = {
    gravity : "",
    temperature: "",
    calibration: "",
};

export default CorrectGravity;
