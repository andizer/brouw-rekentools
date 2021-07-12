
import React, {Fragment} from 'react';
import { Provider } from "react-redux";

import calculateStore from "./redux/store";
import calculations, { getCalculation } from "./redux/containers";

const Calculation = ( { calculation } ) => {
    if ( calculation !== null ) {
        const SpecificCalculation = getCalculation( calculation );

        return <Fragment>
            <Provider store={ calculateStore }>
                <SpecificCalculation type={ calculation } />
            </Provider>
        </Fragment>;
    }

    return <Fragment>
        { calculations.map( ( calculation, key ) => {
            const SpecificCalculation = getCalculation( calculation );

            return <Provider key={ key } store={ calculateStore }>
                <SpecificCalculation key={ key } />
            </Provider>
        } ) }
    </Fragment>;
}

export default Calculation;
