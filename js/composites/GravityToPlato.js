import React from "react";
import PropTypes from "prop-types";
import { FormGroup, StaticFormGroup } from './form';
import { convertGravityPlato } from "../calculation/gravity";
import { Gravity } from "../components";
import {GravityHelp} from "../components/Gravity";

const GravityToPlato = ( props ) => {
    const { setGravity, gravity } = props;
    const result = convertGravityPlato( props.gravity );

    return (
        <div className="form-horizontal">
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

