import { getGravityPoints } from "../calculation";
import { formatAsFloat, formatNumber  } from "../helpers/format";
import { validateGravity, validateGravity } from "../validations";

export const calculateFinalGravity = ( gravity, attenuation ) => {
    gravity     = formatAsFloat( gravity );
    attenuation = formatAsFloat( attenuation );

    if( ! validateGravity( gravity ) ) {
        return '';
    }

    if( attenuation < 0 || attenuation > 100 ) {
        return '';
    }

    let result = gravity - ( ( getGravityPoints( gravity ) / 100 ) * attenuation );

    if ( isNaN( result ) || result > 50 ) {
        return '';
    }

    return formatNumber( result );
};