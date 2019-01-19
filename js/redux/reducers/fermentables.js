import { ADD_FERMENTABLE, UPDATE_FERMENTABLE, REFRESH_FERMENTABLES } from '../actions/fermentables';

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

    case UPDATE_FERMENTABLE:
      state.fermentables[action.id] = {
        ...state.fermentables[action.id],
        ...action.fermentable
      };

      return {
        ...state
      };

    case REFRESH_FERMENTABLES:
      return {
        ...state,
        fermentables: [ ...state.fermentables ]
      };
    default:
      return state;
  }
};

export default fermentablesReducer;
