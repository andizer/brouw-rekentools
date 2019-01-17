/* global console */
import React from "react";
import PropTypes from "prop-types";

import Fermentable from './Fermentable';
import Button from '../components/Button';

const Fermentables = ( props ) => {
  const { fermentables } = props;

  // eslint-disable-next-line no-console
  console.log( fermentables );

  return (
    <React.Fragment>
      { fermentables.length > 0 && fermentables.map( ( fermentable, index ) => {
        return <Fermentable key={ index } { ...fermentable } />
      } ) }
      <Button value="Voeg nog een toe" onClick={ props.onAddFermentable } />
    </React.Fragment>
  );
};

Fermentables.propTypes = {
  fermentables: PropTypes.array,
  onAddFermentable: PropTypes.func.isRequired,
};

Fermentables.defaultProps = {
  fermentables: [],
};

export default Fermentables;
