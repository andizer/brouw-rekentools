import React from "react";
import PropTypes from "prop-types";

import { FormGroup, StaticFormGroup } from './form';
import { convertGravityPlato, normalizeGravity } from '../calculation';
import { Gravity, GravityHelp } from "../components";
import { validateGravity } from "../validations";

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

    return (
        <React.Fragment>
            <FormGroup id="gravity" label="Soortelijk gewicht" help={ GravityHelp } >
                <Gravity
                    className="form-control"
                    id="gravity"
                    name='gravity'
                    onChange={ setGravity }
                    gravity={ gravity }
                    placeholder="Soortelijk gewicht"
                    describedBy={ "help-gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="platoResult" label="Stamwortgehalte" value={ result } />
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

