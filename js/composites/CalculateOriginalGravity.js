import React from "react";
import PropTypes from "prop-types";

import { NumberField, Volume, VolumeHelp } from '../components';
import { FormGroup, StaticFormGroup } from './form';
import { calculatePotentialSugars, convertPlatoGravity } from '../calculation';
import { formatAsFloat } from '../helpers/format';

const calculate = ( efficiency, volume, fermentables ) => {
  efficiency = formatAsFloat( efficiency );
  volume     = formatAsFloat( volume );

  if ( efficiency === '' || volume === '' ) {
    return '';
  }

  let potentialSugars = 0;
  fermentables.map( fermentable => {
    potentialSugars += calculatePotentialSugars( fermentable.weight, fermentable.extract );
  } );

  if ( potentialSugars === 0 ) {
    return "";
  }

  return "" + convertPlatoGravity( potentialSugars * ( efficiency / 100 ) / volume ) + "";
};

const CalculateOriginalGravity = ( props ) => {
  const result = calculate( props.efficiency, props.volume, props.fermentables );

  return (
    <React.Fragment>
      <FormGroup id="volume" label="Volume (liters)" help={ VolumeHelp }>
        <Volume
          className="form-control"
          id="volume"
          name='volume'
          onChange={ props.setVolume }
          volume={props.volume}
          placeholder="Volume in liters"
          describedBy={ "help-volume" }
        />
      </FormGroup>
      <FormGroup id="efficiency" label="Brouwzaalrendement">
        <NumberField
          className="form-control"
          id="efficiency"
          name="efficiency"
          onChange={ props.setEfficiency }
          value={props.efficiency}
          min={ 50 }
          max={ 100 }
        />
      </FormGroup>
      <StaticFormGroup id="expectedOriginalGravity" label="Verwacht begin SG" value={ result } />

    </React.Fragment>
  );
};

CalculateOriginalGravity.propTypes = {
  volume: PropTypes.string.isRequired,
  efficiency: PropTypes.string.isRequired,
  setVolume: PropTypes.func.isRequired,
  setEfficiency: PropTypes.func.isRequired,
  fermentables: PropTypes.array,
};

CalculateOriginalGravity.defaultProps = {
  fermentables: [],
};

export default CalculateOriginalGravity;
