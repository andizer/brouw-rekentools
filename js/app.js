/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Calculation from './Calculation';

const App = ( { calculation, locale } ) => {
  if ( locale ) {
    import( './language/setLanguage' ).then( ( { default: setLanguage } ) => setLanguage( locale ) );
  }

  return <Calculation calculation={ calculation } />
};

App.propTypes = {
  calculation: PropTypes.string,
  calculations: PropTypes.array,
  locale: PropTypes.string,
};

App.defaultProps = {
  calculation: null,
  calculations: [],
  locale: 'nl',
};


let element = document.getElementById( 'app' );
ReactDOM.render(
  <App calculation={ element.getAttribute( "data-calculation" ) || null } />,
  element
);
