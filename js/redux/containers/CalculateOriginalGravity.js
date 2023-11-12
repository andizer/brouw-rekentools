import { connect } from 'react-redux';

import CalculateOriginalGravity from '../../composites/CalculateOriginalGravity';
import { setVolume } from '../actions/volume';
import getVolume from '../selectors/getVolume';
import { setEfficiency } from '../actions/efficiency';
import getEfficiency from '../selectors/getEfficiency';
import getFermentables from '../selectors/getFermentables';

const mapStateToProps = ( state ) => {
  return {
    volume: getVolume( state ),
    efficiency: getEfficiency( state ),
    fermentables: getFermentables( state ),
  };
};

function mapDispatchToProps( dispatch ) {
  return {
    setVolume: (event) => {
      dispatch( setVolume( event.target.value ) );
    },
    setEfficiency: (event) => {
      dispatch( setEfficiency( event.target.value ) );
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CalculateOriginalGravity );
