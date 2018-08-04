
export const platoRanges = {
    min: 0,
    max: 40
};

export const gravityIsInRange =( value ) => {
    return ( value >= platoRanges.min && value <= platoRanges.max );
};

export const platoToGravity = ( value ) => {
    return Math.round( ( 259 / ( 259 - value )) * 1000 );
};