import { connect } from 'react-redux';

import FermentationRate from '../../composites/FermentationRate';

import { setOriginalGravity, setFinalGravity } from '../actions/gravity';

const mapStateToProps = ( state ) => {
    return {
        original_gravity: state.Gravity.original_gravity,
        final_gravity: state.Gravity.final_gravity,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        setOriginal: ( event ) => {
            dispatch( setOriginalGravity( event.target.value ) );
        },
        setFinal: ( event ) => {
            dispatch( setFinalGravity( event.target.value ) );
        },
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( FermentationRate );
