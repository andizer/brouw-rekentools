import React from "react";
import PropTypes from "prop-types";

import Gravity, {GravityHelp} from '../components/Gravity';
import {
    FormGroup,
    StaticFormGroup,
} from './form';

import { calculateAttenuation } from "../calculation/gravity";

const calculate = ( original_gravity, final_gravity ) => {
    if ( original_gravity === '' || final_gravity === '' ) {
        return '';
    }

    const result = calculateAttenuation( original_gravity, final_gravity );
    if ( result === '' ) {
        return '';
    }

    return result + "%";
};

const FermentationRate = ( props ) => {
    const result = calculate( props.original_gravity, props.final_gravity );

    return (
        <div className="form-horizontal">
            <FormGroup id="original_gravity" label="Begin meting" help={ GravityHelp } >
                <Gravity
                    className="form-control"
                    id="original_gravity"
                    name='original_gravity'
                    onChange={ props.setOriginal }
                    gravity={props.original_gravity}
                    placeholder="Begin meting"
                    describedBy={ "help-original_gravity" }
                />
            </FormGroup>
            <FormGroup id="final_gravity" label="Eind meting" help={ GravityHelp } >
                <Gravity
                    className="form-control"
                    id='final_gravity'
                    name='final_gravity'
                    onChange={ props.setFinal }
                    gravity={props.final_gravity}
                    placeholder="Eind meting"
                    describedBy={ "help-final_gravity" }
                />
            </FormGroup>
            <StaticFormGroup id="fermentationRate" label="Vergistingsgraad" value={ result } />
        </div>
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
