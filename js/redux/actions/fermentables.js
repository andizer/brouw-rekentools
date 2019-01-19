export const ADD_FERMENTABLE = "ADD_FERMENTABLE";
export const UPDATE_FERMENTABLE = "UPDATE_FERMENTABLE";
export const REFRESH_FERMENTABLES = "REFRESH_FERMENTABLES";

export const addFermentable = function( fermentable ) {
  return {
    type: ADD_FERMENTABLE,
    fermentable
  }
};

export const updateFermentable = function( id, fermentable ) {
  return {
    type: UPDATE_FERMENTABLE,
    id,
    fermentable
  }
};

export const refreshFermentables = function() {
  return {
    type: REFRESH_FERMENTABLES,
  }
};
