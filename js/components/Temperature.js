import React from "react";
import PropTypes from "prop-types";

import NumberField from "./NumberField";
import { temperatureRanges }  from "../validations";

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
            describedBy={ props.describedBy }
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
    describedBy: PropTypes.string,
};

Temperature.defaultProps = {
    className: "",
    placeholder: "",
    describedBy: "",
};

export default Temperature;
