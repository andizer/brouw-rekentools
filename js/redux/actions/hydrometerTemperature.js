export const SET_TEMPERATURE = "SET_TEMPERATURE";
export const SET_CALIBRATION = "SET_CALIBRATION";

export const setTemperature = function( temperature ) {
    return {
        type: SET_TEMPERATURE,
        temperature
    }
};

export const setCalibration = function( calibration ) {
    return {
        type: SET_CALIBRATION,
        calibration
    }
};
