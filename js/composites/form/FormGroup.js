import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../components";
import Help from "./Help";

const FormGroup = ( props ) => {
    return (
        <div className={ ( "form__group " + props.contextualClass ).trim() } >
            <Label className="form__col--4" htmlFor={ props.id } value={ props.label } />
            <div className="form__col--8">
                { props.children }
            </div>
            { props.help && <Help
              id={ props.id }
              contextualClass="form__col--8 form__col--offset-4"
              value={ props.help } /> }
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
