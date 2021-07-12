import { setLocale } from "react-redux-i18n";

export default function setLanguage( locale ) {
    import( '../redux/store' ).then( ( { default: calculateStore } ) => {
        calculateStore.dispatch( setLocale( locale ) );
    } );
}