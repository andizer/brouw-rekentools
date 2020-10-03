import React from "react";
import PropTypes from 'prop-types';

import { NumberField } from '../components';
import { Column } from './form';
import Row from './form/Row';
import Button from '../components/Button';

const Fermentable = ( props ) => {
  let onChangeName    = props.onChangeName.bind( props );
  let onChangeWeight  = props.onChangeWeight.bind( props );
  let onChangeExtract = props.onChangeExtract.bind( props );
  let onChangeColor   = props.onChangeColor.bind( props );
  let onRemove        = props.onRemove.bind( props );

    return (
      <React.Fragment>
        <Row id={ "row-" + props.id } contextualClass="my-2">
          <Column id={ "column-name-" + props.id }>
            <input
              id={ "name-" + props.id }
              name="name"
              onChange={ onChangeName }
              value={ props.name }
              type="text"
              className="form-control"
              placeholder="Mout / Suiker"
            />
          </Column>
          <Column id={ "column-weight-" + props.id }>
            <NumberField
              id={ "weight-" + props.id }
              name="weight"
              value={ props.weight }
              className="form-control"
              onChange={ onChangeWeight }
              min="0"
              max="5000000"
              placeholder="Gewicht (gram)" />
          </Column>
          <Column id={ "column-extract-" + props.id }>
            <NumberField
              id={ "extract-" + props.id }
              name="extract"
              value={ props.extract }
              className="form-control"
              onChange={ onChangeExtract }
              min="0"
              max="100"
              placeholder="Extractgehalte" />
          </Column>
          <Column id={ "column-color-" + props.id }>
            <NumberField
              id={ "-" + props.id }
              value={ props.color }
              name="color"
              className="form-control"
              onChange={ onChangeColor }
              min="0"
              max="1000"
              placeholder="Kleur (EBC)" />
          </Column>
          <Column id={ "column-remove-" + props.id } contextualClass="col-1">
            <Button value="Verwijderen" onClick={ onRemove } />
          </Column>
        </Row>
      </React.Fragment>
    );
};

Fermentable.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  extract: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeWeight: PropTypes.func.isRequired,
  onChangeExtract: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

Fermentable.defaultProps = {
  id: '',
};

export default Fermentable;

