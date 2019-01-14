import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../components";

const FormGroup = ( props ) => {
    return (
        <div className={ "form-group row " + props.contextualClass } >
            <Label className="col-sm-4 col-form-label" htmlFor={ props.id } value={ props.label } />
            <div className="col-sm-8">
                { props.children }
            </div>
            { props.help && <small id={ "help-" + props.id } className="form-text text-muted col-sm-8 offset-md-4">
                { props.help }
            </small> }
        </div>
    );
};

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  help: PropTypes.string,
  contextualClass: PropTypes.string,
  children: PropTypes.any
};

FormGroup.defaultProps = {
    help: "",
    contextualClass: ""
};

export default FormGroup;
