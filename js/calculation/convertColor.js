
export const SCALE_EBC = "EBC";
export const SCALE_LOVIBOND = "LOVIBOND";
export const SCALE_SRM = "SRM";

export const convertColor = ( currentScale, targetScale, value ) => {
    if ( currentScale === SCALE_EBC ) {
        if ( targetScale === SCALE_SRM ) {
            // EBC to SRM.
            return value * 0.508;
        }

        if ( targetScale === SCALE_LOVIBOND ) {
            // EBC to Lovibond.
            return ( value * 0.375 ) + 0.56;
        }
    }

    if ( currentScale === SCALE_SRM ) {
        if ( targetScale === SCALE_EBC  ) {
            // SRM to EBC.
            return value * 1.97;
        }

        if ( targetScale === SCALE_LOVIBOND ) {
            // SRM to Lovibond.
            return ( value + 0.76 ) / 1.3546;
        }
    }

    if ( currentScale === SCALE_LOVIBOND ) {
        if ( targetScale === SCALE_SRM ) {
            // Lovibond to SRM.
            return ( 1.3546 * value ) - 0.76;
        }

        if ( targetScale === SCALE_EBC ) {
            // Lovibond to EBC
            return ( value - 0.56 ) / 0.375;
            // return ( value * 0.375 ) + 0.56;
        }
    }

    throw "Unknown Conversion";
};

/*
export const convertEBCToSRM = ( EBC ) => {
    return EBC * 0.508;
};

export const convertSRMToEBC = ( SRM ) => {
    return SRM * 1.97;
};

export const convertLovibondToSRM = ( Lovibond ) => {
    return (1.3546 * Lovibond ) - 0.76
};

export const convertSRMtoLovibond = ( SRM ) => {
    return ( SRM + 0.76) ÷ 1.3546
};*/



