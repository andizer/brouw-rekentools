import React from "react";
import PropTypes from "prop-types";
import { I18n } from 'react-redux-i18n';

import { FormGroup, StaticFormGroup } from './form';

import {
    calculateGravityCorrection,
    formatAsFloat,
    formatNumber,
    normalizeGravity,
    gravityRanges,
    validateGravity,
    volumeRanges
} from "@andizer/brew-calculations";

import { NumberField } from '../components';

const calculate = ( volume, measured_gravity, target_gravity ) => {
    volume = formatAsFloat( volume );

    if ( volume === '' || volume < 1 || volume > 500 ) {
        return '';
    }

    measured_gravity = normalizeGravity( measured_gravity );
    target_gravity   = normalizeGravity( target_gravity );

    if ( ! validateGravity( measured_gravity ) || ! validateGravity( target_gravity ) ) {
        return '';
    }

    let result = calculateGravityCorrection( volume, measured_gravity, target_gravity );

    switch( result.action ) {
        case 'do_nothing' :
            return I18n.t( 'correct.do_nothing' );
        case "add_water" :
            if ( ! isNaN( result.amount ) ) {
                return I18n.t( 'correct.add_water', { amount: formatNumber( result.amount ), volume: I18n.t( 'metric.volume', { count: 1 } ) } );
            }
            break;
        case "add_sugar" :
            if ( ! isNaN( result.amount ) ) {
                return I18n.t( 'correct.add_sugar', { amount: formatNumber( result.amount ), weight: I18n.t( 'metric.weight', { count: 1 } ) } );
            }
            break;
    }

    return '';
};

const CorrectGravity = ( props ) => {
    const { volume, measured_gravity, target_gravity } = props;

    let result = calculate( volume, measured_gravity, target_gravity );

    const GravityHelp = I18n.t( 'help.gravity', { min: gravityRanges.min, max: gravityRanges.max } );
    const VolumeHelp  = I18n.t( 'help.volume', { min: volumeRanges.min, max: volumeRanges.max } );

    return (
        <React.Fragment>
            <FormGroup id="volume" label={ I18n.t( 'volume', { volume: I18n.t( 'metric.volume' ) } ) } help={ VolumeHelp } >
                <NumberField
                  min={ volumeRanges.min }
                  max={ volumeRanges.max }
                  id="volume"
                  onChange={props.setVolume}
                  name='volume'
                  value={ props.volume }
                  placeholder={ I18n.t( 'volume', { volume: I18n.t( 'metric.volume' ) } ) }
                  describedBy={ "help-volume" }
                />
            </FormGroup>
            <FormGroup id="measured_gravity" label={ I18n.t( 'measured_gravity' ) } help={ GravityHelp }>
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  id="measured_gravity"
                  name='measured_gravity'
                  onChange={props.setMeasuredGravity}
                  value={ props.measured_gravity }
                  placeholder={ I18n.t( 'measured_gravity' ) }
                  describedBy={ "help-measured_gravity" }
                />
            </FormGroup>
            <FormGroup id="target_gravity" label={ I18n.t( 'target_gravity' ) } help={ GravityHelp }>
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                    id="target_gravity"
                    name='target_gravity'
                    onChange={ props.setTargetGravity }
                    value={ props.target_gravity }
                    placeholder={ I18n.t( 'target_gravity' ) }
                    describedBy={ "help-target_gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="correctGravityResult" label={ I18n.t( 'correct.suggested_advise' ) } value={ result } />
        </React.Fragment>
    );
};

CorrectGravity.propTypes = {
    setVolume: PropTypes.func.isRequired,
    setMeasuredGravity: PropTypes.func.isRequired,
    setTargetGravity: PropTypes.func.isRequired,
    volume: PropTypes.string,
    measured_gravity: PropTypes.string,
    target_gravity: PropTypes.string,
};

CorrectGravity.defaultProps = {
    volume : "",
    measured_gravity: "",
    target_gravity: "",
};

export default CorrectGravity;
