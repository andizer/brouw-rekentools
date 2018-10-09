
import { createStore, combineReducers } from 'redux';

import gravityReducer from "./reducers/gravity";
import correctGravityReducer from './reducers/correctGravity';
import hydrometerTemperatureReducer from './reducers/hydrometerTemperature';


const rootReducer = combineReducers( {
    Gravity: gravityReducer,
    CorrectGravity: correctGravityReducer,
    HydrometerTemperature: hydrometerTemperatureReducer,
} );

export default createStore( rootReducer );

