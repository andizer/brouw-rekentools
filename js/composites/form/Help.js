import React from "react";
import PropTypes from "prop-types";

const Help = ( props ) => {
  return (
<<<<<<< HEAD
    <small id={ "help-" + props.id } className={ "form__help " + props.contextualClass } >
=======
    <small id={ "help-" + props.id } className={ "form-text text-muted " + props.contextualClass } >
>>>>>>> c9dac4c (More WIP)
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
