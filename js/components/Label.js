import React from "react";
import PropTypes from "prop-types";

const Label = ( props ) => {
    return (
        <label htmlFor={ props.htmlFor} className={ props.className }>
            { props.value }
        </label>
    );
};

Label.defaultProps = {
    className: '',
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Label;


