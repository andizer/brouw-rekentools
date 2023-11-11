import React from 'react';

import AlcoholPercentage from './AlcoholPercentage';
import CorrectGravity from './CorrectGravity';
import FermentationRate from './FermentationRate';
import GravityToPlato from './GravityToPlato';
import HydrometerTemperature from './HydrometerTemperature';
import ColorConvert from './ColorConvert';

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
