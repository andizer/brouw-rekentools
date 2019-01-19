export const calculatePotentialSugars = ( weight, extract ) => {
  if ( weight === '' || extract === '' ) {
    return '';
  }

  weight = parseInt( weight, 10 );
  extract = parseInt( extract, 10 );

  return parseFloat( ( weight / 1000 ) * extract );
};
