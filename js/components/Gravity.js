import React from "react";
import PropTypes from "prop-types";

import { gravityRanges } from "../helpers/gravity";
import NumberField from "./NumberField";

const Gravity = ( props ) => {
    return (
        <NumberField
            min={ gravityRanges.min }
            max={ gravityRanges.max }
            className={props.className}
            id={ props.id }
            onChange={props.onChange}
            name={props.name}
            value={ props.gravity }
            placeholder={props.placeholder}
        />
    );
};

Gravity.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

Gravity.defaultProps = {
    className: "",
    placeholder: "",
};

export default Gravity;
