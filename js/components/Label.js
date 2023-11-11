import React from "react";
import PropTypes from "prop-types";

const Label = ( props ) => {
    return (
        <label htmlFor={ props.htmlFor} className={ ( "form__label " + props.className ).trim() }>
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

Label.defaultProps = {
    className: ""
};

export default Label;


