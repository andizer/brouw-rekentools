import { connect } from 'react-redux';

import Fermentables from '../../composites/Fermentables';
import { addFermentable } from '../actions/fermentables';
import getFermentables from '../selectors/getFermentables';

function mapStateToProps( state ) {
  return {
    fermentables: getFermentables( state ),
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onAddFermentable: () => {
      dispatch( addFermentable() );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Fermentables );
