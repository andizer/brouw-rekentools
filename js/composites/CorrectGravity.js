import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

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
            return t( 'advice_do_nothing' );
        case "add_water" :
            if ( ! isNaN( result.amount ) ) {
                return t( 'advice_add_water', { amount: formatNumber( result.amount ), volume: t( 'volume_liter' ) } );
            }
            break;
        case "add_sugar" :
            if ( ! isNaN( result.amount ) ) {
                return t( 'advice_add_sugar', { amount: formatNumber( result.amount ), weight: t( 'kilograms' ) } );
            }
            break;
    }

    return '';
};

const CorrectGravity = ( props ) => {
    const { volume, measured_gravity, target_gravity } = props;

    let result  = calculate( volume, measured_gravity, target_gravity );
    const { t } = useTranslation();

    const GravityHelp = t( "gravityHelp", { min: gravityRanges.min, max: gravityRanges.max } );
    const VolumeHelp  = t( 'volumeHelp', { min: volumeRanges.min, max: volumeRanges.max } );

    return (
        <React.Fragment>
            <FormGroup id="volume" label={ t( 'volume', { volume: t( 'volume_liters' ) } ) } help={ VolumeHelp } >
                <NumberField
                  min={ volumeRanges.min }
                  max={ volumeRanges.max }
                  id="volume"
                  onChange={props.setVolume}
                  name='volume'
                  value={ props.volume }
                  placeholder={ t( 'volume', { volume: t( 'volume_liters' ) } ) }
                  describedBy={ "help-volume" }
                />
            </FormGroup>
            <FormGroup id="measured_gravity" label={ t( 'measured_gravity' ) } help={ GravityHelp }>
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  id="measured_gravity"
                  name='measured_gravity'
                  onChange={props.setMeasuredGravity}
                  value={ props.measured_gravity }
                  placeholder={ t( 'measured_gravity' ) }
                  describedBy={ "help-measured_gravity" }
                />
            </FormGroup>
            <FormGroup id="target_gravity" label={ t( 'target_gravity' ) } help={ GravityHelp }>
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                    id="target_gravity"
                    name='target_gravity'
                    onChange={ props.setTargetGravity }
                    value={ props.target_gravity }
                    placeholder={ t( 'target_gravity' ) }
                    describedBy={ "help-target_gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="correctGravityResult" label={ t( 'suggested_advise' ) } value={ result } />
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
