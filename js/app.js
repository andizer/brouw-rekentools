/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import "./language/i18n";

import Calculation from './Calculation';
import { useTranslation } from "react-i18next";

const App = ( { calculation, locale = 'nl' } ) => {
  if ( locale ) {
    const { i18n } = useTranslation();
    i18n.changeLanguage( locale )
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
