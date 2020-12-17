import i18n from "i18next"
import {initReactI18next, I18nextProvider} from "react-i18next";

import translationEn from './lang/en.json';
import translationKo from './lang/kr.json';

const resource =  {
    en: {
        translation: translationEn
    },
    ko: {
        translation: translationKo
    }
};

const currentLocale = window.location.pathname.split('/')[1];
i18n
    .use(initReactI18next)  // passes i18n down to react-i18next
    .init({
        resources    : resource,
        lng          : currentLocale,
        fallbackLng  : 'en',
        // ns: ['translation'],
        // defaultNS: "translation",
        debug        : true,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default function Locale({children}) {
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    )
};
