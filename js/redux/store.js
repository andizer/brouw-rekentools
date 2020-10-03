
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import { reducers } from "./reducers";
import translations from "../language/translations";

const rootReducer = combineReducers( {
  ...reducers,
  i18n: i18nReducer
} );

const store = createStore( rootReducer, applyMiddleware( thunk ) );

syncTranslationWithStore( store );
store.dispatch( loadTranslations( translations ) );

let locale = 'en';
if ( document.brew_calculations ) {
  locale = document.brew_calculations.locale;
}

store.dispatch( setLocale( locale ) );

export default store;
