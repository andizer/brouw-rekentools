import React from "react";
import PropTypes from "prop-types";

import { Gravity, GravityHelp } from '../components';
import { FormGroup, StaticFormGroup } from './form';
import { calculateAttenuation, normalizeGravity } from '../calculation';
import { formatPercentage } from '../helpers/format';
import { gravityHasProgress } from "../validations";

const calculate = ( originalGravity, finalGravity ) => {
    originalGravity = normalizeGravity( originalGravity );
    finalGravity    = normalizeGravity( finalGravity );

    if ( ! gravityHasProgress( originalGravity, finalGravity ) ) {
        return '';
    }

    const result = calculateAttenuation( originalGravity, finalGravity );

    return formatPercentage( result );
};

const FermentationRate = ( props ) => {
    const result = calculate( props.original_gravity, props.final_gravity );

    return (
        <React.Fragment>
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
        </React.Fragment>
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
