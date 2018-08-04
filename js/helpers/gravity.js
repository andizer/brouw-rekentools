
export const gravityRanges = {
    min: 980,
    max: 1150
};

export const gravityIsInRange =( value ) => {
    return ( value >= gravityRanges.min && value <= gravityRanges.max );
};

export const getGravityPoints = ( gravity ) => {
    return gravity - 1000;
};

export const normalizeGravity = ( value ) => {
    if ( ( ( value / 1000 ) - 1 ) < 1 ) {
        return value / 1000;
    }

    return value;
};


/**
 * Converts the given SG value to plato
 * @see https://www.winning-homebrew.com/Plato-to-specific-gravity.html
 * @param value
 * @returns {number}
 */
export const gravityToPlato =( value ) => {
    return Math.round( ( 259 - ( 259 / normalizeGravity( value ) )) );

    // 259-(259/SG) & SG=259/(259-degrees P)
    // (-1 * 616.868) + (1111.14 * sg) – (630.272 * sg^2) + (135.997 * sg^3)
    // + (plato / (258.6 – ( (plato/258.2) *227.1) ) )
    // return Math.round( ( 1 + ( value / ( 258.6 - 0.87955 * value ) ) ) * 1000 );
    //return Math.round( ( value - 1000 ) / 4 );
};