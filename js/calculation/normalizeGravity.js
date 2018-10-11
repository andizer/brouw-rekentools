export const normalizeGravity = ( value ) => {
    if ( ( ( value / 1000 ) - 1 ) < 1 ) {
        return value / 1000;
    }

    return value;
};