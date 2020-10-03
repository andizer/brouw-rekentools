import React from "react";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";

import { Gravity } from '../components';
import { FormGroup, StaticFormGroup } from './form';
import { calculateAlcoholPercentage } from '../calculation';
import { formatPercentage, normalizeGravity } from "../helpers/format";
import { gravityHasProgress, gravityRanges } from '../validations';

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
                <Gravity
                    className="form-control"
                    id="original_gravity"
                    name='original_gravity'
                    onChange={ props.setOriginal }
                    gravity={props.original_gravity}
                    placeholder={ I18n.t( 'original_gravity' ) }
                    describedBy={ "help-original_gravity" }
                />
            </FormGroup>
            <FormGroup id="final_gravity" label={ I18n.t( 'final_gravity' ) } help={ GravityHelp }>
                <Gravity
                    className="form-control"
                    id='final_gravity'
                    name='final_gravity'
                    onChange={ props.setFinal }
                    gravity={props.final_gravity}
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
