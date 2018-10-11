import { getGravityPoints } from "../calculation";

export const calculateGravityCorrection = ( volume, gravity, target_gravity ) => {
    let current_gravity        = getGravityPoints( gravity );
    let current_target_gravity = getGravityPoints( target_gravity );

    if ( current_gravity < current_target_gravity ) {
        let result = volume * ( current_target_gravity - current_gravity ) * 2.604;

        return {
            action: "add_sugar",
            amount: result
        };
    }

    if ( current_gravity > current_target_gravity ) {
        let result =  ( volume * current_gravity ) / current_target_gravity;

        return {
            action: "add_water",
            amount: result - volume
        };
    }

    return { action: "do_nothing" };
};