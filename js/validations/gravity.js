import { gravityIsInRange } from '../helpers/gravity';

export const validateGravity = ( gravity ) => {
    return ( gravity !== '' && gravityIsInRange( gravity ) );
};

export const gravityHasProgress = ( originalGravity, finalGravity ) => {
    return ( validateGravity( originalGravity ) && validateGravity( finalGravity ) && finalGravity < originalGravity  );
};