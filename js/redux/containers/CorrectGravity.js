import { connect } from 'react-redux';

import CorrectGravity from '../../composites/CorrectGravity';
import { setMeasuredGravity, setTargetGravity } from '../actions/correctGravity';
import { setVolume } from '../actions/volume';
import getVolume from '../selectors/getVolume';

function mapStateToProps( state ) {
    return {
        volume: getVolume( state ),
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
