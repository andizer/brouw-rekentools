import React from "react";
import PropTypes from 'prop-types';

import { Button } from '../../components';

/**
 * Renders a form group with a button.
 *
 * @param {Object} props
 * @returns {React.Element}
 * @constructor
 */
const FormGroupButton = ( props ) => {
  return (
    <div className="form-group">
      <div className="col-sm-offset-4 col-sm-8">
        <Button className="btn btn-primary" onClick={props.onClick.bind(this)} value={props.value}/>
      </div>
    </div>
  );
};

FormGroupButton.defaultProps = {
  value: '',
};

FormGroupButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default FormGroupButton;
