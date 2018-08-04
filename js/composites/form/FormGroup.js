import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../components";

const FormGroup = ( props ) => {
    return (
        <div className="form-group">
            <Label className="col-sm-4 control-label" htmlFor={ props.id } value={ props.label } />
            <div className="col-sm-8">
                { props.children }
            </div>
        </div>
    );
};

FormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default FormGroup;
