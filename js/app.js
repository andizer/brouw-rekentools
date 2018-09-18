import React from 'react';
import ReactDOM from 'react-dom';

import Calculation from "./composites/Calculation";

const classNames = [
    '_handleAlcoholPercentage',
    '_handleCorrectGravity',
    '_handleGravityToPlato',
    '_handleHydrometerTemperature',
    '_handleFermentationRate',
];

classNames.map(
    ( className ) => {
        let element = document.getElementById( className );
        if ( element === null ) {
            return;
        }

        ReactDOM.render(
            <Calculation type={ className.replace( '_handle', '' ) } />,
            element
        );
    }
);

