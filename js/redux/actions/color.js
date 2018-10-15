export const SET_COLOR_EBC      = "SET_COLOR_EBC";
export const SET_COLOR_LOVIBOND = "SET_COLOR_LOVIBOND";
export const SET_COLOR_SRM      = "SET_COLOR_SRM";

export const setColorEBC = function( color ) {
    return {
        type: SET_COLOR_EBC,
        colorEBC: color
    }
};

export const setColorLovibond = function( color ) {
    return {
        type: SET_COLOR_LOVIBOND,
        colorLovibond: color
    }
};

export const setColorSRM = function( color ) {
    return {
        type: SET_COLOR_SRM,
        colorSRM: color
    }
};
