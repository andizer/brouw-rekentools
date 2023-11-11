import React from "react";
import PropTypes from 'prop-types';

const NumberField = ( props ) => {
  return (
    <input
      type="number"
      className={ ("form__control " + props.className).trim() }
      id={props.id}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
      aria-describedby={props.describedBy}
    />
  );
};

NumberField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  min: PropTypes.any,
  max: PropTypes.any,
  describedBy: PropTypes.string,
};

NumberField.defaultProps = {
  className: ""
};

export default NumberField;
