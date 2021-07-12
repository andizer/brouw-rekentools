/* global document */
import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Calculation = React.lazy(() => import( './Calculation' ) );

const App = ( { calculation, locale } ) => {
  if ( locale ) {
    import( './language/setLanguage' ).then( ( { default: setLanguage } ) => setLanguage( locale ) );
  }

  return <Fragment>
    <Suspense id={ calculation } fallback={ "Loading..." }>
      <Calculation calculation={ calculation } />
    </Suspense>
  </Fragment>
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
