import React from "react";
import PropTypes from "prop-types";

import Gravity from '../components/Gravity';
import {
    FormGroup,
    StaticFormGroup,
} from './form';

import { calculateAlcoholPercentage } from "../calculation/alcoholPercentage";

const calculate = ( original_gravity, final_gravity ) => {
    if ( original_gravity === '' || final_gravity === '' ) {
        return '';
    }

    return calculateAlcoholPercentage( original_gravity, final_gravity );
};

const AlcoholPercentage = ( props ) => {
    const result = calculate( props.original_gravity, props.final_gravity );

    return (
        <div className="form-horizontal">
            <FormGroup id="alcohol-begin" label="Begin meting">
                <Gravity
                    className="form-control"
                    id="alcohol-begin"
                    name='begin'
                    onChange={ props.setOriginal }
                    gravity={props.original_gravity}
                    placeholder="Begin meting"
                />
            </FormGroup>
            <FormGroup id="alcohol-end" label="Eind meting">
                <Gravity
                    className="form-control"
                    id='alcohol-end'
                    name='eind'
                    onChange={ props.setFinal }
                    gravity={props.final_gravity}
                    placeholder="Eind meting"
                />
            </FormGroup>
            <StaticFormGroup id="alcoholResult" label="Alcoholpercentage" value={ result } />
        </div>
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
