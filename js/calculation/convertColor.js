export const SCALE_EBC = "EBC";
export const SCALE_LOVIBOND = "LOVIBOND";
export const SCALE_SRM = "SRM";

export const convertColor = ( currentScale, targetScale, value ) => {
    switch ( currentScale ) {
        case SCALE_EBC :
            if ( targetScale === SCALE_SRM ) {
                return value * 0.508;
            }

            if ( targetScale === SCALE_LOVIBOND ) {
                return ( value * 0.375 ) + 0.56;
            }

            break;

        case SCALE_SRM :
            if ( targetScale === SCALE_EBC  ) {
                return value * 1.97;
            }

            if ( targetScale === SCALE_LOVIBOND ) {
                return ( value + 0.76 ) / 1.3546;
            }

            break;
        case SCALE_LOVIBOND :
            if ( targetScale === SCALE_SRM ) {
                return ( 1.3546 * value ) - 0.76;
            }

            if ( targetScale === SCALE_EBC ) {
                return ( value - 0.56 ) / 0.375;
            }
        break;
    }

    throw "Unknown conversion";
};