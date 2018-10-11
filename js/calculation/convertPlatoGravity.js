
export const convertPlatoGravity = ( value ) => {
    return Math.round( ( 259 / ( 259 - value )) * 1000 );
};