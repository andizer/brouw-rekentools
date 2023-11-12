import { connect } from 'react-redux';

import { updateFermentable, refreshFermentables } from '../actions/fermentables';
import Fermentable from '../../composites/Fermentable';
import getFermentables from '../selectors/getFermentables';

function mapStateToProps( state, ownProps ) {
  const fermentables = getFermentables( state );

  return {
    ...fermentables[ ownProps.id ],
    fermentables: fermentables,
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onChangeName( evt ) {
      dispatch( updateFermentable( this.id, { name : evt.target.value } ) );
      dispatch( refreshFermentables() );
    },

    onChangeWeight( evt ) {
      dispatch( updateFermentable( this.id, { weight : evt.target.value } ) );
      dispatch( refreshFermentables() );
    },

    onChangeExtract( evt ) {
      dispatch( updateFermentable( this.id, { extract : evt.target.value } ) );
      dispatch( refreshFermentables() );
    },

    onChangeColor( evt ) {
      dispatch( updateFermentable( this.id, { color : evt.target.value } ) );
      dispatch( refreshFermentables() );
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Fermentable );
