import React from "react";
import PropTypes from "prop-types";

const Help = ( props ) => {
  return (
    <small id={ "help-" + props.id } className={ "form-text text-muted " + props.contextualClass } >
      { props.value }
    </small>
  );
};

Help.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  contextualClass: PropTypes.string,
};

Help.defaultProps = {
  contextualClass: '',
};

export default Help;
