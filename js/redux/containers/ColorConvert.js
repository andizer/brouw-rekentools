import { connect } from 'react-redux';

import ColorConvert from '../../composites/ColorConvert';
import { setColorEBC, setColorLovibond, setColorSRM } from '../actions/color';

function mapStateToProps( state ) {
    return {
        colorEBC: state.Color.colorEBC,
        colorLovibond: state.Color.colorLovibond,
        colorSRM: state.Color.colorSRM,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        setColorEBC: (event) => {
            dispatch( setColorEBC( event.target.value ) );
        },
        setColorLovibond: (event) => {
            dispatch( setColorLovibond( event.target.value ) );
        },
        setColorSRM: (event) => {
            dispatch( setColorSRM( event.target.value ) );
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( ColorConvert );
