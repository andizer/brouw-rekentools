import React from "react";
import PropTypes from "prop-types";

const Button = ( props ) => {
    return (
        <button className={ props.className } onClick={ props.onClick.bind( this ) }>
            { props.value }
        </button>
    );
};

Button.defaultProps = {
    className: '',
    onClick: () => { },
};

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
};

export default Button;
