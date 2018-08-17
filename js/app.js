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

const App = ( { classNames } ) => {
    return (
        <div>
            { classNames.map( className => {
                return <Calculation type={ className.replace( '_handle', '' ) } />
            } ) }
        </div>
    )
};


ReactDOM.render( <App classNames={ classNames } />, document.getElementById( "app" ) );
