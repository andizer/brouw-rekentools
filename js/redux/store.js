
import { createStore, combineReducers } from 'redux';

import gravityReducer from "./reducers/gravity";
import correctGravityReducer from './reducers/correctGravity';
import hydrometerTemperatureReducer from './reducers/hydrometerTemperature';
import colorReducer from './reducers/color';
import volumeReducer from './reducers/volume';
import efficiencyReducer from './reducers/efficiency';
import fermentablesReducer from './reducers/fermentables';

const rootReducer = combineReducers( {
  Color: colorReducer,
  CorrectGravity: correctGravityReducer,
  Efficiency: efficiencyReducer,
  Fermentables: fermentablesReducer,
  Gravity: gravityReducer,
  HydrometerTemperature: hydrometerTemperatureReducer,
  Volume: volumeReducer
} );

export default createStore( rootReducer );

