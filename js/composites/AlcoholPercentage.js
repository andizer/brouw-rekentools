import React from "react";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";

import { FormGroup, StaticFormGroup } from './form';
import { calculateAlcoholPercentage, formatPercentage, normalizeGravity, gravityHasProgress, gravityRanges } from '@andizer/brew-calculations';
import { NumberField } from '../components';

const calculate = ( originalGravity, finalGravity ) => {
    originalGravity = normalizeGravity( originalGravity );
    finalGravity    = normalizeGravity( finalGravity );

    if ( ! gravityHasProgress( originalGravity, finalGravity ) ) {
        return '';
    }

    const alcoholPercentage = calculateAlcoholPercentage( originalGravity, finalGravity );

    return formatPercentage( alcoholPercentage );
};

const AlcoholPercentage = ( props ) => {
    const result      = calculate( props.original_gravity, props.final_gravity );
    const GravityHelp = I18n.t( 'help.gravity', { min: gravityRanges.min, max: gravityRanges.max } );

    return (
        <React.Fragment>
            <FormGroup id="original_gravity" label={ I18n.t( 'original_gravity' ) } help={ GravityHelp }>
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  id="original_gravity"
                  onChange={ props.setOriginal }
                  name='original_gravity'
                  value={props.original_gravity}
                  placeholder={ I18n.t( 'original_gravity' ) }
                  describedBy={ "help-original_gravity" }
                />
            </FormGroup>
            <FormGroup id="final_gravity" label={ I18n.t( 'final_gravity' ) } help={ GravityHelp }>
                <NumberField
                    min={ gravityRanges.min }
                    max={ gravityRanges.max }
                    id='final_gravity'
                    name='final_gravity'
                    onChange={ props.setFinal }
                    value={props.final_gravity}
                    placeholder={ I18n.t( 'final_gravity' ) }
                    describedBy={ "help-final_gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="alcoholResult" label={ I18n.t( 'alcohol_percentage' ) } value={ result } />
        </React.Fragment>
    );
};

AlcoholPercentage.propTypes = {
    setOriginal: PropTypes.func.isRequired,
    setFinal: PropTypes.func.isRequired,
    original_gravity: PropTypes.string,
    final_gravity: PropTypes.string,
};

AlcoholPercentage.defaultProps = {
    original_gravity : "",
    final_gravity: "",
};

export default AlcoholPercentage;
