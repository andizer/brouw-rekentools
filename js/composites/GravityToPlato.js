import React from "react";
import PropTypes from "prop-types";

import { FormGroup, StaticFormGroup } from './form';
import { convertGravityPlato, normalizeGravity } from '../calculation';
import { Gravity, GravityHelp } from "../components";
import { formatAsFloat } from "../helpers/format";
import { validateGravity } from "../validations";

const calculate = ( gravity ) => {
    // First convert any comma's to periods.
    gravity = formatAsFloat( gravity );

    // Then we just want to have 1065 instead of 1.065.
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

