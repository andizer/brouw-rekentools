export const SET_MEASURED_GRAVITY = "SET_MEASURED_GRAVITY";
export const SET_TARGET_GRAVITY   = "SET_TARGET_GRAVITY";

export const setMeasuredGravity = function( gravity ) {
    return {
        type: SET_MEASURED_GRAVITY,
        gravity
    }
};

export const setTargetGravity = function( gravity ) {
    return {
        type: SET_TARGET_GRAVITY,
        gravity
    }
};

