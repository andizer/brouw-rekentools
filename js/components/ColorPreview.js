import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Label } from "../components";

// Colors with SRM as basis
const colors = {
    1: "#F3F993",
    2: "#F5F75C",
    3: "#F6F513",
    4: "#EAE615",
    5: "#E0D01B",
    6: "#D5BC26",
    7: "#CDAA37",
    8: "#C1963C",
    9: "#BE8C3A",
    10: "#BE823A",
    11: "#C17A37",
    12: "#BF7138",
    13: "#BC6733",
    14: "#B26033",
    15: "#A85839",
    16: "#985336",
    17: "#8D4C32",
    18: "#7C452D",
    19: "#6B3A1E",
    20: "#5D341A",
    21: "#4E2A0C",
    22: "#4A2727",
    23: "#361F1B",
    24: "#261716",
    25: "#231716",
    26: "#19100F",
    27: "#16100F",
    28: "#120D0C",
    29: "#100B0A",
    30: "#050B0A",
};

const ColorPreviewElement = styled.span`
  width: 25px;
  height: 25px;
  display: inline-block;
  background: ${ props => props.color || "#050B0A" };
  border-radius: 100%;
  border: 3px solid #FFF;  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const ColorPreview = ( props ) => {
    let color = Math.round( props.color );
    if ( color < 1 ) {
        color = 1;
    }

    if ( color > 30 ) {
        color = 30;
    }

    return <div className="form__group">
        <Label className="form__col--4 col-form-label" htmlFor={ props.id } value={ props.label } />
        <span id={ props.id } className="form__col--8 form__control form__control--plain">
            <ColorPreviewElement color={ colors[ color ] } />
        </span>
    </div>;
};

ColorPreview.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.number,
};

ColorPreview.defaultProps = {
    color: 1
};

export default ColorPreview;
