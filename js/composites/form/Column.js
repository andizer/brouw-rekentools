import React from "react";
import PropTypes from "prop-types";

const Column = ( props ) => {
  return (
    <div className={ "col " + props.contextualClass } >
        { props.children }
        { props.help && <small id={ "help-" + props.id } className="form-text text-muted">
          { props.help }
        </small> }
    </div>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  help: PropTypes.string,
  contextualClass: PropTypes.string,
  children: PropTypes.any
};

Column.defaultProps = {
  help: "",
  contextualClass: ""
};

export default Column;
