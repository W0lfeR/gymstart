
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  bg: {
    translation: {
      home: 'Начало',
      prices: 'Цени',
      gallery: 'Галерия',
      videos: 'Видеа',
      location: 'Локация',
      blog: 'Блог',
    },
    homepage: {
      gymstartsubtitle: "НАПРАВЕТЕ",
      gymstarttitle: "БОДИ ШЕЙП",
      gymstartdescription: "Тук ще ви помогнем да оформите и изградите тялото си и да живеете живота си пълноценно."
    },
  },
  en: {
    translation: {
      home: 'Home',
      prices: 'Prices',
      gallery: 'Gallery',
      videos: 'Videos',
      location: 'Location',
      blog: 'Blog',
    },
    homepage: {
      gymstartsubtitle: "MAKE YOUR",
      gymstarttitle: "BODY SHAPE",
      gymstartdescription: "In here we will help you to shape and build your body and live your life to the fullest."

    },
  },

};

// const getPreferredLanguage = () => {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('preferredLanguage');
//   }
//   return null;
// };

// const initialLanguage = getPreferredLanguage() || 'bg';

// const getPreferredLanguage = () => {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('preferredLanguage');
//   }
//   return null;
// };


// const initialLanguage = getPreferredLanguage() || (typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'bg');

i18n
  .use(initReactI18next)
  .init({
    lng: typeof window !== 'undefined' && window.location.pathname.startsWith('/bg') ? 'bg' : 'en',
    // lng: storedLanguage || (typeof window !== 'undefined' && window.location.pathname.startsWith('/bg') ? 'bg' : 'en'),
    fallbackLng: 'bg',
    supportedLngs: ['bg', 'en'],
    resources,
    react: {
      useSuspense: false,
    },
  });

  // i18n.on('languageChanged', (lang) => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('preferredLanguage', lang);
  //   }
  // });


export default i18n;





