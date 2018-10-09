import { normalizeGravity } from '../helpers/gravity';
import { formatAsFloat, formatNumber } from '../helpers/format';
import { gravityHasProgress } from "../validations/gravity";

export const calculateAlcoholPercentage = ( beginValue, endValue ) => {
    beginValue = formatAsFloat( beginValue );
    endValue   = formatAsFloat( endValue );

    if ( ! gravityHasProgress( beginValue, endValue ) ) {
        return '';
    }

    let result = ( ( normalizeGravity( beginValue ) - normalizeGravity( endValue ) ) * 131.5 );

    if ( isNaN( result ) || result > 50 ) {
        return '';
    }

    return formatNumber( result );
};