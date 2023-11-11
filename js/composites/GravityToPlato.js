import React from "react";
import PropTypes from "prop-types";
import { NumberField } from '../components';
import { useTranslation } from 'react-i18next';

import {
    convertGravityPlato,
    normalizeGravity,
    gravityRanges,
    validateGravity,
} from '@andizer/brew-calculations'

import { FormGroup, StaticFormGroup } from './form';

/**
 * Performs the calculation.
 *
 * @param {string} gravity The gravity.
 *
 * @returns {string} The calculated result.
 */
const calculate = ( gravity ) => {
    gravity = normalizeGravity( gravity );

    if ( ! validateGravity( gravity ) ) {
        return '';
    }

    const result = convertGravityPlato( gravity );

    if ( isNaN( result ) ) {
        return '';
    }

    return result + '°Plato';
};


const GravityToPlato = ( props ) => {
    const { setGravity, gravity } = props;
    const result = calculate( props.gravity );
    const { t }  = useTranslation();

    const GravityHelp = t( "gravityHelp", { min: gravityRanges.min, max: gravityRanges.max } );

    return (
        <React.Fragment>
            <FormGroup id="gravity" label={ t( 'gravity' ) } help={ GravityHelp } >
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  id="gravity"
                  name='gravity'
                  onChange={ setGravity }
                  value={ gravity }
                  placeholder={ t( 'gravity' ) }
                  describedBy={ "help-gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="platoResult" label="" value={ result } />
        </React.Fragment>
    );
};

GravityToPlato.propTypes = {
    setGravity: PropTypes.func.isRequired,
    gravity: PropTypes.string,
};

GravityToPlato.defaultProps = {
    gravity: "",
};

export default GravityToPlato;

