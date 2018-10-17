import { connect } from 'react-redux';

import AlcoholPercentage from '../../composites/AlcoholPercentage';

import { setOriginalGravity, setFinalGravity } from '../actions/gravity';

function mapStateToProps( state ) {
    return {
        original_gravity: state.Gravity.original_gravity,
        final_gravity: state.Gravity.final_gravity,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        setOriginal: ( event ) => {
            dispatch( setOriginalGravity( event.target.value ) );
        },
        setFinal: ( event ) => {
            dispatch( setFinalGravity( event.target.value ) );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( AlcoholPercentage );
