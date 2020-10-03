import React from "react";
import PropTypes from "prop-types";

import { Gravity, GravityHelp, Temperature, TemperatureHelp } from '../components';
import { FormGroup, StaticFormGroup } from './form';
import { correctHydrometerTemperature, normalizeGravity } from '../calculation';
import { formatAsFloat } from "../helpers/format";
import { validateTemperature, validateGravity } from "../validations";

const calculate = ( gravity, temperature, calibration ) => {
    gravity     = normalizeGravity( gravity );
    temperature = formatAsFloat( temperature );
    calibration = formatAsFloat( calibration );

  if ( ! validateGravity( gravity ) ) {
      return '';
  }

  if ( ! validateTemperature( temperature ) ) {
      return '';
  }

if ( ! validateTemperature( calibration ) ) {
    return '';
}

const result = correctHydrometerTemperature( gravity, temperature, calibration );

if ( isNaN( result ) ) {
    return '';
}

return Math.round( result ).toString();
};

const CorrectGravity = ( props ) => {
    const { gravity, temperature, calibration } = props;

    let result = calculate( gravity, temperature, calibration );

    return (
        <React.Fragment>
            <FormGroup id="gravity" label="Gemeten SG" help={ GravityHelp } >
                <Gravity
                    className="form-control"
                    id="gravity"
                    name='gravity'
                    onChange={ props.setGravity }
                    gravity={ props.gravity }
                    placeholder="Gemeten SG"
                    describedBy={ "help-gravity" }
                />
            </FormGroup>
            <FormGroup id="temperature" label="Temperatuur tijdens meting" help={ TemperatureHelp } >
                <Temperature
                    className="form-control"
                    id="temperature"
                    name='temperature'
                    onChange={ props.setTemperature }
                    temperature={ props.temperature }
                    placeholder="Temperatuur tijdens meting (celsius)"
                    describedBy={ "help-temperature" }
                />
            </FormGroup>
            <FormGroup id="calibration" label="Gekalibreerde temperatuur" help={ TemperatureHelp }>
                <Temperature
                    className="form-control"
                    id="calibration"
                    name='calibration'
                    onChange={ props.setCalibration }
                    temperature={ props.calibration }
                    placeholder="Gekalibreerde temperatuur (celsius)"
                    describedBy={ "help-calibration" }
                />
            </FormGroup>
            <StaticFormGroup id="correctHydrometerTemperatureResult" label="Bijgesteld SG" value={ result } />
        </React.Fragment>
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
