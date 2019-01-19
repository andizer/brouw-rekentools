import { connect } from 'react-redux';

import Fermentables from '../../composites/Fermentables';
import { addFermentable, updateFermentable } from '../actions/fermentables';
import getFermentables from '../selectors/getFermentables';

function mapStateToProps( state ) {
  return {
    fermentables: getFermentables( state ),
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onAddFermentable: () => {
      dispatch( addFermentable( {
        name: '',
        weight: '',
        extract: '',
        color: '',
        MCU: '',
        potentialSugars: '',
      } ) );
    },

    onFermentableChange: ( id, fermentable ) => {
      dispatch( updateFermentable( id, fermentable ) );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Fermentables );
