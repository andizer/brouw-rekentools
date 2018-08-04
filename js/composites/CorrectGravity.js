import React from "react";
import PropTypes from "prop-types";

import Gravity from '../components/Gravity';
import NumberField from "../components/NumberField";

import { FormGroup, StaticFormGroup, FormGroupButton } from './form';

import { calculateGravityCorrection } from "../calculation/gravity";

const calculate = ( volume, measured_gravity, target_gravity ) => {
    if ( volume === '' || measured_gravity === '' || target_gravity === '' ) {
        return '';
    }

    return calculateGravityCorrection( volume, measured_gravity, target_gravity );
};

const CorrectGravity = ( props ) => {
    const { volume, measured_gravity, target_gravity } = props;

    let result = calculate( volume, measured_gravity, target_gravity );

    return (
        <div className="form-horizontal">
            <FormGroup id="volume" label="Volume in liters">
                <NumberField
                    className="form-control"
                    id="volume"
                    name='volume'
                    onChange={ props.setVolume }
                    value={props.volume}
                    placeholder="Volume in liters"
                    min="1"
                    max="500"
                />
            </FormGroup>
            <FormGroup id="measured_gravity" label="Gemeten SG">
                <Gravity
                    className="form-control"
                    id="measured_gravity"
                    name='measured_gravity'
                    onChange={ props.setMeasuredGravity }
                    gravity={ props.measured_gravity }
                    placeholder="Gemeten SG"
                />
            </FormGroup>
            <FormGroup id="target_gravity" label="Doel SG">
                <Gravity
                    className="form-control"
                    id="target_gravity"
                    name='target_gravity'
                    onChange={ props.setTargetGravity }
                    gravity={ props.target_gravity }
                    placeholder="Doel SG"
                />
            </FormGroup>
            <StaticFormGroup id="correctGravityResult" label="Wat te doen" value={ result } />
            <FormGroupButton onClick={ props.reload } value="Bereken SG correctie" />
        </div>
    );
};

CorrectGravity.propTypes = {
    setVolume: PropTypes.func.isRequired,
    setMeasuredGravity: PropTypes.func.isRequired,
    setTargetGravity: PropTypes.func.isRequired,
    reload: PropTypes.func.isRequired,
    volume: PropTypes.string,
    measured_gravity: PropTypes.string,
    target_gravity: PropTypes.string,
};

CorrectGravity.defaultProps = {
    volume : "",
    measured_gravity: "",
    target_gravity: "",
};

export default CorrectGravity;
