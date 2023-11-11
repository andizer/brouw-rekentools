import React from "react";
import PropTypes from "prop-types";

import { Label, StaticField } from "../../components";

const StaticFormGroup = ( props ) => {
    if ( props.value === '' ) {
        return null;
    }

    return (
        <div className="form-group row">
            <Label className="col-sm-4" htmlFor={ props.id } value={ props.label } />
            <StaticField value={ props.value } className="col-sm-8 form__control--plain" id={ props.id }  />
        </div>
    );
};

StaticFormGroup.defaultProps = {
    className: '',
    value: '',
};

StaticFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default StaticFormGroup;
