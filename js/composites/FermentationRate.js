import React from "react";
import PropTypes from "prop-types";

import { FormGroup, StaticFormGroup } from './form';
import {
    calculateAttenuation,
    formatPercentage,
    normalizeGravity,
    gravityHasProgress,
    gravityRanges
} from '@andizer/brew-calculations';
import { I18n } from 'react-redux-i18n';
import { NumberField } from '../components';

const calculate = ( originalGravity, finalGravity ) => {
    originalGravity = normalizeGravity( originalGravity );
    finalGravity    = normalizeGravity( finalGravity );

    if ( ! gravityHasProgress( originalGravity, finalGravity ) ) {
        return '';
    }

    const result = calculateAttenuation( originalGravity, finalGravity );

    return formatPercentage( result );
};

const FermentationRate = ( props ) => {
    const result      = calculate( props.original_gravity, props.final_gravity );
    const GravityHelp = I18n.t( 'help.gravity', { min: gravityRanges.min, max: gravityRanges.max } );

    return (
        <React.Fragment>
            <FormGroup id="original_gravity" label={ I18n.t( 'original_gravity' ) } help={ GravityHelp } >
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  className="form-control"
                  id="original_gravity"
                  onChange={ props.setOriginal }
                  name='original_gravity'
                  value={props.original_gravity}
                  placeholder={ I18n.t( 'original_gravity' ) }
                  describedBy={ "help-original_gravity" }
                />
            </FormGroup>
            <FormGroup id="final_gravity" label={ I18n.t( 'final_gravity' ) } help={ GravityHelp } >
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  className="form-control"
                  id='final_gravity'
                  name='final_gravity'
                  onChange={ props.setFinal }
                  value={props.final_gravity}
                  placeholder={ I18n.t( 'final_gravity' ) }
                  describedBy={ "help-final_gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="fermentationRate" label={ I18n.t( 'attenuation' ) } value={ result } />
        </React.Fragment>
    );
};

FermentationRate.propTypes = {
    setOriginal: PropTypes.func.isRequired,
    setFinal: PropTypes.func.isRequired,
    original_gravity: PropTypes.string,
    final_gravity: PropTypes.string,
};

FermentationRate.defaultProps = {
    original_gravity : "",
    final_gravity: "",
};

export default FermentationRate;
