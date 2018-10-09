import React from "react";

const NumberField = ( props ) => {
    return (
        <input
            type="number"
            className={props.className}
            id={ props.id }
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            aria-describedby={ props.describedBy }
        />
    );
};

export default NumberField;
