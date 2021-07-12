import React from 'react';

const AlcoholPercentage = React.lazy(() => import( './AlcoholPercentage' ) );
const CorrectGravity = React.lazy(() => import( './CorrectGravity' ) );
const FermentationRate = React.lazy(() => import( './FermentationRate' ) );
const GravityToPlato = React.lazy(() => import( './GravityToPlato' ) );
const HydrometerTemperature = React.lazy(() => import( './HydrometerTemperature' ) );
const ColorConvert = React.lazy(() => import( './ColorConvert' ) );

export function getCalculation( calculation ) {
    switch( calculation ) {
        case 'AlcoholPercentage' :
            return AlcoholPercentage;
        case 'CorrectGravity' :
            return CorrectGravity;
        case 'FermentationRate' :
            return FermentationRate;
        case 'GravityToPlato' :
            return GravityToPlato;
        case 'HydrometerTemperature' :
            return HydrometerTemperature;
        case 'ColorConvert' :
            return ColorConvert;
        default:
            return null;
    }
}

export default [
    'AlcoholPercentage',
    'CorrectGravity',
    'FermentationRate',
    'GravityToPlato',
    'HydrometerTemperature',
    'ColorConvert',
];
