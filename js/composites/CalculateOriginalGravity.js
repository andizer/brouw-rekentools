import React from "react";
import PropTypes from "prop-types";

import Volume, { VolumeHelp } from '../components/Volume';
import FormGroup from './form/FormGroup';
import NumberField from '../components/NumberField';

const CalculateOriginalGravity = ( props ) => {
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
    </React.Fragment>
  );
};

CalculateOriginalGravity.propTypes = {
  volume: PropTypes.string.isRequired,
  efficiency: PropTypes.string.isRequired,
  setVolume: PropTypes.func.isRequired,
  setEfficiency: PropTypes.func.isRequired,
};

CalculateOriginalGravity.defaultProps = {

};

export default CalculateOriginalGravity;
