
export const gravityRanges = {
    min: 980,
    max: 1150
};

export const validateGravity = ( gravity ) => {
    return ( gravity !== '' && gravityIsInRange( gravity ) );
};

export const gravityHasProgress = ( originalGravity, finalGravity ) => {
    return ( validateGravity( originalGravity ) && validateGravity( finalGravity ) && finalGravity < originalGravity  );
};

export const gravityIsInRange =( value ) => {
    return ( value >= gravityRanges.min && value <= gravityRanges.max );
};