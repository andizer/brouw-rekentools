import React from "react";
import PropTypes from "prop-types";

import NumberField from "./NumberField";
import { temperatureRanges}  from "../helpers/temperature";

const Temperature = ( props ) => {
    return (
        <NumberField
            min={ temperatureRanges.min }
            max={ temperatureRanges.max }
            className={props.className}
            id={ props.id }
            onChange={props.onChange}
            name={props.name}
            value={ props.temperature }
            placeholder={props.placeholder}
        />
    );
};

Temperature.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

Temperature.defaultProps = {
    className: "",
    placeholder: "",
};

export default Temperature;
