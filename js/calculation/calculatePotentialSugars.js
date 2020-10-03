import { weightIsInRange } from '../validations';

export const calculatePotentialSugars = ( weight, extract ) => {
  if ( weight === '' || extract === '' ) {
    return 0;
  }

  weight = parseInt( weight, 10 );
  if ( ! weightIsInRange( weight ) ) {
    return 0;
  }

  extract = parseInt( extract, 10 );
  if ( extract > 100 || extract < 0 ) {
    extract = 75;
  }

  return parseFloat( ( weight / 1000 ) * extract );
};
