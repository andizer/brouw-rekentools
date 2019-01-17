export const ADD_FERMENTABLE = "ADD_FERMENTABLE";

export const addFermentable = function() {
  return {
    type: ADD_FERMENTABLE,
    fermentable: {
      weight: '',
      extract: '',
      colorLovibond: '',
      MCU: '',
      PotentialSugars: '',
    }
  }
};
