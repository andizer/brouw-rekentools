import React from "react";
import PropTypes from "prop-types";

import { Label, StaticField } from "../../components";

const StaticFormGroup = ( props ) => {
    if ( props.value === '' ) {
        return null;
    }

    return (
        <div className="form__group">
            <Label className="form__col--4" htmlFor={ props.id } value={ props.label } />
            <StaticField value={ props.value } className="form__col--8 form__control form__control--plain" id={ props.id }  />
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
