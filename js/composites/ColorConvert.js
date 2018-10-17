import React from "react";
import PropTypes from "prop-types";

import { FormGroup, } from './form';

import { convertColor } from "../calculation";
import { NumberField, ColorPreview } from "../components";
import { SCALE_EBC, SCALE_LOVIBOND, SCALE_SRM } from "../calculation/convertColor";
import { convertToFloat, roundNumber} from "../helpers/format";

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

const Calculate = ( props ) => {
    let { colorEBC, colorLovibond, colorSRM } = props;
    const currentScale = determineCurrentScale( colorEBC, colorLovibond, colorSRM );

    if ( currentScale === null ) {
       return props;
    }

    switch( currentScale ) {
        case SCALE_EBC :
            colorEBC = convertToFloat( colorEBC );

            if ( colorEBC === '' || colorEBC < 0 ) {
                return props;
            }

            colorLovibond = convertColor( SCALE_EBC, SCALE_LOVIBOND, colorEBC );
            colorSRM = convertColor( SCALE_EBC, SCALE_SRM, colorEBC );
            break;
        case SCALE_LOVIBOND :

            colorLovibond = convertToFloat( colorLovibond );
            if ( colorEBC < 0 ) {
                return props;
            }

            colorEBC = convertColor( SCALE_LOVIBOND, SCALE_EBC, colorLovibond );
            colorSRM = convertColor( SCALE_LOVIBOND, SCALE_SRM, colorLovibond );
            break;
        case SCALE_SRM :
            colorSRM = convertToFloat( colorSRM );
            if ( colorSRM < 0 ) {
                return props;
            }

            colorEBC = convertColor( SCALE_SRM, SCALE_EBC, colorSRM );
            colorLovibond = convertColor( SCALE_SRM, SCALE_LOVIBOND, colorSRM );
            break;
    }

    return {
        colorEBC: roundNumber( colorEBC  ),
        colorLovibond: roundNumber( colorLovibond  ),
        colorSRM: roundNumber( colorSRM  ),
    };
};

const ColorConvert = ( props ) => {
    let { colorEBC, colorLovibond, colorSRM } = Calculate( props );

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
                    min="0"

                />
            </FormGroup>
            <FormGroup id="color-lovibond" label="°L (Lovibond)" >
                <NumberField
                    className="form-control"
                    id="color-lovibond"
                    name='color-lovibond'
                    onChange={ props.setColorLovibond }
                    value={ colorLovibond }
                    placeholder="Lovibond"
                    min="0"

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
                    min="0"
                />
            </FormGroup>
            { colorSRM !== '' && <ColorPreview label="Kleur" id="color" color={ colorSRM } /> }
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

