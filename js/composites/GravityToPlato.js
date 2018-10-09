import React from "react";
import PropTypes from "prop-types";
import { FormGroup, StaticFormGroup } from './form';
import { convertGravityPlato } from "../calculation/gravity";
import { Gravity } from "../components";

const GravityToPlato = ( props ) => {
    const { setGravity, gravity } = props;
    const result = convertGravityPlato( props.gravity );

    return (
        <div className="form-horizontal">
            <FormGroup id="gravity" label="Soortelijk gewicht">
                <Gravity
                    className="form-control"
                    id="gravity"
                    name='gravity'
                    onChange={ setGravity }
                    gravity={ gravity }
                    placeholder="Soortelijk gewicht"
                />
            </FormGroup>
            <StaticFormGroup id="platoResult" label="Stamwortgehalte" value={ result } />
        </div>
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

