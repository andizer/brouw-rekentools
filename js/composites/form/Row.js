import React from "react";
import PropTypes from "prop-types";

const Row = ( props ) => {
  return (
    <div className={ "row " + props.contextualClass } >
      { props.children }
    </div>
  );
};

Row.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  contextualClass: PropTypes.string,
};

Row.defaultProps = {
  contextualClass: '',
};

export default Row;
