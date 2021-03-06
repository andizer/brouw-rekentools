import React from "react";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";

import { FormGroup, StaticFormGroup } from './form';
import { convertGravityPlato } from '../calculation';
import { normalizeGravity } from '../helpers/format'
import { gravityRanges, validateGravity } from '../validations';
import { NumberField } from '../components';

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

    const GravityHelp = I18n.t( 'help.gravity', { min: gravityRanges.min, max: gravityRanges.max } );

    return (
        <React.Fragment>
            <FormGroup id="gravity" label={ I18n.t( 'gravity' ) } help={ GravityHelp } >
                <NumberField
                  min={ gravityRanges.min }
                  max={ gravityRanges.max }
                  className="form-control"
                  id="gravity"
                  name='gravity'
                  onChange={ setGravity }
                  value={ gravity }
                  placeholder={ I18n.t( 'gravity' ) }
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

