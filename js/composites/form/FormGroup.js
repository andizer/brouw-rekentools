import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../components";

const FormGroup = ( props ) => {
    return (
        <div className={ "form-group " + props.contextualClass } >
            <Label className="col-sm-4 control-label" htmlFor={ props.id } value={ props.label } />
            <div className="col-sm-8">
                { props.children }
            </div>
            { props.help && <div id={ "help-" + props.id } className="help-block col-sm-8 col-sm-offset-4">
                { props.help }
            </div> }
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
