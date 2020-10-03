import React from "react";
import PropTypes from "prop-types";

import { Gravity, Temperature } from '../components';
import { FormGroup, StaticFormGroup } from './form';
import { correctHydrometerTemperature } from '../calculation';
import { formatAsFloat, normalizeGravity } from "../helpers/format";
import { validateTemperature, validateGravity, gravityRanges, temperatureRanges } from '../validations';
import { I18n } from 'react-redux-i18n';

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

    const GravityHelp     = I18n.t( 'help.gravity', { min: gravityRanges.min, max: gravityRanges.max } );
    const TemperatureHelp = I18n.t( 'help.temperature', { min: temperatureRanges.min, max: temperatureRanges.max } );

    let result = calculate( gravity, temperature, calibration );

    return (
        <React.Fragment>
            <FormGroup id="gravity" label={ I18n.t( 'measured_gravity' ) } help={ GravityHelp } >
                <Gravity
                    className="form-control"
                    id="gravity"
                    name='gravity'
                    onChange={ props.setGravity }
                    gravity={ props.gravity }
                    placeholder={ I18n.t( 'measured_gravity' ) }
                    describedBy={ "help-gravity" }
                />
            </FormGroup>
            <FormGroup id="temperature" label={ I18n.t( 'temperature_during_measurement' ) } help={ TemperatureHelp } >
                <Temperature
                    className="form-control"
                    id="temperature"
                    name='temperature'
                    onChange={ props.setTemperature }
                    temperature={ props.temperature }
                    placeholder={ I18n.t( 'temperature_during_measurement' ) }
                    describedBy={ "help-temperature" }
                />
            </FormGroup>
            <FormGroup id="calibration" label={ I18n.t( 'calibrated_temperature' ) } help={ TemperatureHelp }>
                <Temperature
                    className="form-control"
                    id="calibration"
                    name='calibration'
                    onChange={ props.setCalibration }
                    temperature={ props.calibration }
                    placeholder={ I18n.t( 'calibrated_temperature' ) }
                    describedBy={ "help-calibration" }
                />
            </FormGroup>
            <StaticFormGroup id="correctHydrometerTemperatureResult" label={ I18n.t( 'corrected_gravity' ) } value={ result } />
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
