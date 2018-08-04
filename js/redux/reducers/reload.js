import { RELOAD_CALCULATION } from '../actions/reloadCalculation';

function reloadReducer( state = [], action ) {
	switch( action.type ) {
		case RELOAD_CALCULATION:
		default:
			return state;
	}
}

export default reloadReducer;