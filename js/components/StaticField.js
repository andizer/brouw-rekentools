import React from "react";
import PropTypes from "prop-types";

const StaticField = ( props ) => {
    return (
        <p className={ props.className } id={ props.id }>
            { props.value }
        </p>
    );
};

StaticField.defaultProps = {
    className: '',
    value: ''
};

StaticField.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
};

export default StaticField;
