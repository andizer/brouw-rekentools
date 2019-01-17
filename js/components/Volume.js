import React from "react";
import PropTypes from "prop-types";

import { volumeRanges } from "../validations";
import NumberField from "./NumberField";

export const VolumeHelp = "Het volume moet liggen tussen de " + volumeRanges.min + " en " + volumeRanges.max + ".";

export const Volume = ( props ) => {
  return (
    <NumberField
      min={ volumeRanges.min }
      max={ volumeRanges.max }
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

Volume.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  describedBy: PropTypes.string,
};

Volume.defaultProps = {
  className: "",
  placeholder: "",
  describedBy: "",
};

export default Volume;
