import { ADD_FERMENTABLE } from '../actions/fermentables';

const INITIAL_STATE = {
  fermentables: []
};

const fermentablesReducer = ( state = INITIAL_STATE, action ) => {
  switch( action.type ) {
    case ADD_FERMENTABLE:
      return {
        ...state,
        fermentables: [ ...state.fermentables, action.fermentable ]
      };

    default:
      return state;
  }
};

export default fermentablesReducer;
