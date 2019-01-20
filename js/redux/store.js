
import { createStore, combineReducers } from 'redux';

import gravityReducer from "./reducers/gravity";
import correctGravityReducer from './reducers/correctGravity';
import hydrometerTemperatureReducer from './reducers/hydrometerTemperature';
import colorReducer from './reducers/color';
import volumeReducer from './reducers/volume';

const rootReducer = combineReducers( {
    Gravity: gravityReducer,
    CorrectGravity: correctGravityReducer,
    HydrometerTemperature: hydrometerTemperatureReducer,
    Color: colorReducer,
  Volume: volumeReducer,
} );

export default createStore( rootReducer );

