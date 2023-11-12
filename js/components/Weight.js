<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";

import { weightRanges } from '../validations';
import NumberField from "./NumberField";

export const WeightHelp = "Het gewicht (gram) moet liggen tussen de " + weightRanges.min +
  " en " + weightRanges.max + ".";

export const Weight = ( props ) => {
  return (
    <NumberField
      min={ weightRanges.min }
      max={ weightRanges.max }
      className={props.className}
      id={ props.id }
      onChange={props.onChange}
      name={props.name}
      value={ props.volume }
      placeholder={props.placeholder}
      describedBy={ props.describedBy }
    />
  );
};

Weight.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  describedBy: PropTypes.string,
};

Weight.defaultProps = {
  className: "",
  placeholder: "",
  describedBy: "",
};

export default Weight;
=======
import { weightRanges } from '../validations';

export const WeightHelp = "Het gewicht (gram) moet liggen tussen de " + weightRanges.min +
  " en " + weightRanges.max + ".";
>>>>>>> c9dac4c (More WIP)
