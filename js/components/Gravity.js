import React from "react";
import PropTypes from "prop-types";

import { gravityRanges } from "../validations";
import NumberField from "./NumberField";

export const GravityHelp = "De waarde SG moet liggen tussen de " + gravityRanges.min + " en " + gravityRanges.max + ".";

export const Gravity = ( props ) => {
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
            describedBy={ props.describedBy }
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
    describedBy: PropTypes.string,
};

Gravity.defaultProps = {
    className: "",
    placeholder: "",
    describedBy: "",
};

export default Gravity;
