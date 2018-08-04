import React from "react";
import PropTypes from "prop-types";

import Gravity from '../components/Gravity';
import {
    FormGroup,
    StaticFormGroup,
    FormGroupButton
} from './form';

import { calculateAttenuation } from "../calculation/gravity";

const calculate = ( original_gravity, final_gravity ) => {
    if ( original_gravity === '' || final_gravity === '' ) {
        return '';
    }

    return calculateAttenuation( original_gravity, final_gravity );
};

const FermentationRate = ( props ) => {
    const result = calculate( props.original_gravity, props.final_gravity );

    return (
        <div className="form-horizontal">
            <FormGroup id="original_gravity" label="Begin meting">
                <Gravity
                    className="form-control"
                    id="original_gravity"
                    name='original_gravity'
                    onChange={ props.setOriginal }
                    gravity={props.original_gravity}
                    placeholder="Begin meting"
                />
            </FormGroup>
            <FormGroup id="final_gravity" label="Eind meting">
                <Gravity
                    className="form-control"
                    id='final_gravity'
                    name='final_gravity'
                    onChange={ props.setFinal }
                    gravity={props.final_gravity}
                    placeholder="Eind meting"
                />
            </FormGroup>
            <StaticFormGroup id="fermentationRate" label="Vergistingsgraad" value={ result } />
            <FormGroupButton onClick={ props.reload } value="Bereken vergistingsgraad" />
        </div>
    );
};

FermentationRate.propTypes = {
    setOriginal: PropTypes.func.isRequired,
    setFinal: PropTypes.func.isRequired,
    reload: PropTypes.func.isRequired,
    original_gravity: PropTypes.string,
    final_gravity: PropTypes.string,
};

FermentationRate.defaultProps = {
    original_gravity : "",
    final_gravity: "",
};

export default FermentationRate;
