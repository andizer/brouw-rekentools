import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

import {
    convertColor,
    convertToFloat,
    roundNumber,
    SCALE_EBC,
    SCALE_LOVIBOND,
    SCALE_SRM,
} from "@andizer/brew-calculations";

import { FormGroup, } from './form';
import { NumberField, ColorPreview } from "../components";

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
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <FormGroup id="color-ebc" label="EBC" >
                <NumberField
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
                    id="color-srm"
                    name='color-srm'
                    onChange={ props.setColorSRM }
                    value={ colorSRM }
                    placeholder="SRM"
                    min="0"
                />
            </FormGroup>
            { colorSRM !== '' && <ColorPreview label={ t( 'color' ) } id="color" color={ colorSRM } /> }
        </React.Fragment>
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

