import React from "react";
import PropTypes from 'prop-types';

import { NumberField } from '../components';
import { Column } from './form';

const Fermentable = ( props ) => {
  let onChangeName    = props.onChangeName.bind( props );
  let onChangeWeight  = props.onChangeWeight.bind( props );
  let onChangeExtract = props.onChangeExtract.bind( props );
  let onChangeColor   = props.onChangeColor.bind( props );

    return (
      <React.Fragment>
        <div className="row my-2">
          <div className="col">
            <input
              id={ "name-" + props.id }
              name="name"
              onChange={ onChangeName }
              value={ props.name }
              type="text"
              className="form-control"
              placeholder="Mout / Suiker"
            />
          </div>
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

          <div className="col">
            <NumberField
              id={ "extract-" + props.id }
              name="extract"
              value={ props.extract }
              className="form-control"
              onChange={ onChangeExtract }
              min="0"
              max="100"
              placeholder="Extractgehalte" />
          </div>
          <div className="col">
            <NumberField
              id={ "-" + props.id }
              value={ props.color }
              name="color"
              className="form-control"
              onChange={ onChangeColor }
              min="0"
              max="1000"
              placeholder="Kleur (EBC)" />
          </div>
        </div>
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
};

Fermentable.defaultProps = {
  id: '',
};

export default Fermentable;

