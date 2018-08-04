export const SET_ORIGINAL_GRAVITY = "SET_ORIGINAL_GRAVITY";
export const SET_FINAL_GRAVITY    = "SET_FINAL_GRAVITY";
export const SET_GRAVITY          = "SET_GRAVITY";

export const setGravity = function( gravity ) {
    return {
        type: SET_GRAVITY,
        gravity
    }
};

export const setOriginalGravity = function( gravity ) {
    return {
        type: SET_ORIGINAL_GRAVITY,
        gravity
    }
};

export const setFinalGravity = function( gravity ) {
    return {
        type: SET_FINAL_GRAVITY,
        gravity
    }
};
