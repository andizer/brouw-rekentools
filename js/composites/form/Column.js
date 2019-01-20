import React from "react";
import PropTypes from "prop-types";
import Help from './Help';

const Column = ( props ) => {
  return (
    <div className={ "col " + props.contextualClass } >
      { props.children }
      { props.help && <Help
        id={ props.id }
        value={props.help } /> }
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
