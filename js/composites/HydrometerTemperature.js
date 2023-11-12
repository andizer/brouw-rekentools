import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { NumberField } from '../components';
import { FormGroup, StaticFormGroup } from './form';
import {
    correctHydrometerTemperature,
    formatAsFloat,
    normalizeGravity,
    validateGravity,
    gravityRanges,
    validateTemperature,
    temperatureRanges
} from "@andizer/brew-calculations";

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
    const { t } = useTranslation();
    const { gravity, temperature, calibration } = props;

    const GravityHelp = t( "gravityHelp", { min: gravityRanges.min, max: gravityRanges.max } );
    const TemperatureHelp = t( 'temperatureHelp', { min: temperatureRanges.min, max: temperatureRanges.max } );

    let result = calculate( gravity, temperature, calibration );

    return (
        <React.Fragment>
            <FormGroup id="gravity" label={ t( 'measured_gravity' ) } help={ GravityHelp } >
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  id="gravity"
                  name='gravity'
                  onChange={ props.setGravity }
                  value={ props.gravity }
                  placeholder={ t( 'measured_gravity' ) }
                  describedBy={ "help-gravity" }
                />
            </FormGroup>
            <FormGroup id="temperature" label={ t( 'temperature_during_measurement' ) } help={ TemperatureHelp } >
                <NumberField
                  min={ temperatureRanges.min }
                  max={ temperatureRanges.max }
                  id="temperature"
                  name='temperature'
                  onChange={ props.setTemperature }
                  value={ props.temperature }
                  placeholder={ t( 'temperature_during_measurement' ) }
                  describedBy={ "help-temperature" }
                />
            </FormGroup>
            <FormGroup id="calibration" label={ t( 'calibrated_temperature' ) } help={ TemperatureHelp }>
                <NumberField
                  min={ temperatureRanges.min }
                  max={ temperatureRanges.max }
                  id="calibration"
                  name='calibration'
                  onChange={ props.setCalibration }
                  value={ props.calibration }
                  placeholder={ t( 'calibrated_temperature' ) }
                  describedBy={ "help-calibration" }
                />
            </FormGroup>
            <StaticFormGroup id="correctHydrometerTemperatureResult" label={ t( 'corrected_gravity' ) } value={ result } />
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
