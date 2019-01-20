import React from "react";
import PropTypes from "prop-types";

import Fermentable from '../redux/containers/Fermentable';
import Button from '../components/Button';
import { Column, Row, Help } from './form';
import { WeightHelp } from '../components/Weight';

const Fermentables = ( props ) => {
  const { fermentables } = props;

  return (
    <React.Fragment>
      <Row id="row-fermentables" contextualClass="my-2">
        <Column id="column-weight">
           Mout / Suiker
        </Column>
        <Column id="column-weight">
          Gewicht (gram)
          <Help
            id="column-weight"
            value={ WeightHelp }
          />
        </Column>
        <Column id="column-weight">
           Extractgehalte
        </Column>
        <Column id="column-weight">
           Kleur (EBC)
        </Column>
        <Column id="column-weight" contextualClass="col-1">
           Acties
        </Column>
      </Row>
      { fermentables.length > 0 && fermentables.map( ( fermentable, index ) => {
        return <Fermentable
          key={ index }
          id={ index }
          { ...fermentable } />
      } ) }
      <Button value="Voeg nog een toe" onClick={ props.onAddFermentable } />
    </React.Fragment>
  );
};

Fermentables.propTypes = {
  fermentables: PropTypes.array,
  onAddFermentable: PropTypes.func.isRequired,
  onFermentableChange: PropTypes.func.isRequired,
};

Fermentables.defaultProps = {
  fermentables: [],
};

export default Fermentables;
