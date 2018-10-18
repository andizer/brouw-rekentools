/* global document */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import calculations from './redux/containers';
import calculateStore from './redux/store';

const App = ( { calculation } ) => {
  if ( calculation !== null && calculations.hasOwnProperty( calculation ) ) {
    const SpecificCalculation = calculations[ calculation ];

    return <Fragment>
      <Provider store={ calculateStore }>
        <SpecificCalculation type={ calculation } />
      </Provider>
    </Fragment>
  }

  const calculationKeys = Object.keys( calculations );

  return <Fragment>
      { calculationKeys.map( ( calculation, key ) => {
        const SpecificCalculation = calculations[ calculation ];

        return <Provider key={ key } store={ calculateStore }>
          <SpecificCalculation key={ key } />
        </Provider>
      } ) }
  </Fragment>
};

App.propTypes = {
  calculation: PropTypes.string,
  calculations: PropTypes.array

};

App.defaultProps = {
  calculation: null,
  calculations: []
};


let element = document.getElementById( 'app' );

ReactDOM.render(
  <App calculation={ element.getAttribute( "data-calculation" ) || null } />,
  element
);
