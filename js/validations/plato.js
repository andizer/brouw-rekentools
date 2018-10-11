
export const platoRanges = {
    min: 0,
    max: 40
};

export const platoIsInRange =( value ) => {
    return ( value >= platoRanges.min && value <= platoRanges.max );
};
