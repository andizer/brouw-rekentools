import { connect } from 'react-redux';

import CorrectGravity from '../../composites/CorrectGravity';
import { setVolume, setMeasuredGravity, setTargetGravity } from '../actions/correctGravity';

function mapStateToProps( state ) {
    return {
        volume: state.CorrectGravity.volume,
        measured_gravity: state.CorrectGravity.measured_gravity,
        target_gravity: state.CorrectGravity.target_gravity,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        setVolume: (event) => {
            dispatch( setVolume( event.target.value ) );
        },
        setMeasuredGravity: (event) => {
            dispatch( setMeasuredGravity( event.target.value ) );
        },
        setTargetGravity: (event) => {
            dispatch( setTargetGravity( event.target.value ) );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CorrectGravity );
