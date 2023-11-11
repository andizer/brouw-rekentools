import React from "react";
import PropTypes from "prop-types";

import { StaticField } from "../../components";
import { FormGroup } from "./index";

const StaticFormGroup = ( props ) => {
    if ( props.value === '' ) {
        return null;
    }

    return (
        <FormGroup id={ props.id } label={ props.label}>
            <StaticField value={ props.value } className="form__control form__control--plain" id={ props.id }  />
        </FormGroup>
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
