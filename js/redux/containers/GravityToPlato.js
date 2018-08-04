import React from 'react';
import { connect } from 'react-redux';

import GravityToPlato from '../../composites/GravityToPlato';
import { setGravity } from '../actions/gravity';

function mapStateToProps( state ) {
    return {
        gravity: state.Gravity.gravity,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        setGravity: (event) => {
            dispatch( setGravity( event.target.value ) );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( GravityToPlato );
