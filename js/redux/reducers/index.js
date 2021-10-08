import gravityReducer from './gravity';
import correctGravityReducer from './correctGravity';
import efficiencyReducer from './efficiency';
import hydrometerTemperatureReducer from './hydrometerTemperature';
import colorReducer from './color';
import volumeReducer from './volume';

export const reducers = {
  Gravity: gravityReducer,
  CorrectGravity: correctGravityReducer,
  Efficiency: efficiencyReducer,
  HydrometerTemperature: hydrometerTemperatureReducer,
  Color: colorReducer,
  Volume: volumeReducer,
};
