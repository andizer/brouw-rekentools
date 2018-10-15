import React from "react";
import PropTypes from "prop-types";

import { FormGroup, } from './form';

import { convertColor } from "../calculation";
import { NumberField } from "../components";
import {formatAsFloat, formatNumber} from "../helpers/format";
import { validateGravity } from "../validations";
import {SCALE_EBC, SCALE_LOVIBOND, SCALE_SRM} from "../calculation/convertColor";

const determineCurrentScale = ( colorEBC, colorLovibond, colorSRM ) => {
    if ( colorEBC !== '' ) {
        return SCALE_EBC;
    }

    if ( colorLovibond !== '' ) {
        return SCALE_LOVIBOND;
    }

    if ( colorSRM !== '' ) {
        return SCALE_SRM;
    }

    return null;
};


const ColorConvert = ( props ) => {
    let { colorEBC, colorLovibond, colorSRM } = props;

    const currentScale = determineCurrentScale( colorEBC, colorLovibond, colorSRM );

    switch( currentScale ) {
        case SCALE_EBC :
            colorEBC = parseFloat( colorEBC.replace( ",", "." ) );
            colorLovibond = convertColor( SCALE_EBC, SCALE_LOVIBOND, colorEBC );
            colorSRM = convertColor( SCALE_EBC, SCALE_SRM, colorEBC );
            break;
        case SCALE_LOVIBOND :
            colorLovibond = parseFloat( colorLovibond.replace( ",", "." ) );
            colorEBC = convertColor( SCALE_LOVIBOND, SCALE_EBC, colorLovibond );
            colorSRM = convertColor( SCALE_LOVIBOND, SCALE_SRM, colorLovibond );
            break;
        case SCALE_SRM :
            colorSRM = parseFloat( colorSRM.replace( ",", "." ) );
            colorEBC = convertColor( SCALE_SRM, SCALE_EBC, colorSRM );
            colorLovibond = convertColor( SCALE_SRM, SCALE_LOVIBOND, colorSRM );

            break;
    }

    if ( currentScale ) {
        colorEBC = Math.round(colorEBC * 100) / 100;
        colorLovibond = Math.round(colorLovibond * 100) / 100;
        colorSRM = Math.round(colorSRM * 100) / 100;

    }


    return (
        <div className="form-horizontal">
            <FormGroup id="color-ebc" label="EBC" >
                <NumberField
                    className="form-control"
                    id="color-ebc"
                    name='color-ebc'
                    onChange={ props.setColorEBC }
                    value={ colorEBC }
                    placeholder="EBC"

                />
            </FormGroup>
            <FormGroup id="color-lovibond" label="Lovibond" >
                <NumberField
                    className="form-control"
                    id="color-lovibond"
                    name='color-lovibond'
                    onChange={ props.setColorLovibond }
                    value={ colorLovibond }
                    placeholder="Lovibond"

                />
            </FormGroup>
            <FormGroup id="color-srm" label="SRM" >
                <NumberField
                    className="form-control"
                    id="color-srm"
                    name='color-srm'
                    onChange={ props.setColorSRM }
                    value={ colorSRM }
                    placeholder="SRM"

                />
            </FormGroup>
        </div>
    );
};

ColorConvert.propTypes = {
    setColorEBC: PropTypes.func.isRequired,
    setColorLovibond: PropTypes.func.isRequired,
    setColorSRM: PropTypes.func.isRequired,
    colorEBC: PropTypes.string,
    colorLovibond: PropTypes.string,
    colorSRM: PropTypes.string,
};

ColorConvert.defaultProps = {
    colorEBC: "",
    colorLovibond: "",
    colorSRM: "",
};

export default ColorConvert;

