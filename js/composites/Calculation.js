import React from 'react';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';

import calculations from '../redux/containers';
import calculateStore from '../redux/store';
import { reload } from '../redux/actions/reloadCalculation';

const reloadCalculation = () => {
    calculateStore.dispatch( reload() );
};

const Calculation = ( props ) => {
    const SpecificCalculation = calculations[ props.type ];

    return <React.Fragment>
        <Provider store={ calculateStore }>
            <SpecificCalculation reload={ reloadCalculation } />
        </Provider>
    </React.Fragment>;
};

Calculation.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Calculation;
