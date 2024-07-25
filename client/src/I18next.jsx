
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources : {
        en: {
            translation :{
                Lorem: "Welcome to our school",
                accueil : "Home",
                formation: 'Courses',
                contact : 'Contact-Us',
                inscription : "Inscription",
                search: 'Search',
                search_input: 'Search for your course...',
                s2title: 'INCOFORS',
                s2content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut tenetur ab facere sit beatae.',
            },
        },
        ar: {
            translation: {
                Lorem: 'اهلا بكم في مدرستكم',
                accueil: "رئيسي",
                formation: 'دروس',
                contact: "اتصل بنا",
                inscription : "تسجيل",
                search: 'بحث',
                search_input: '...ابحث عن درسك',
                s2title: 'INCOFORS',
                s2content: 'تليلاشثقاشلاثلا ىيقايلىيشبالشقثلسلرسبصثفةلانيقثشصقليبلايسلى ثفاثصق  فلثق لقلصثقل ثقال فث صثلرىى سيغتست غست غ',
            }
        },
        fr: {
            translation:{
                Lorem: 'Bienvenue dans votre école',
                accueil: "Accueil",
                formation: "Formations",
                contact: "Contactez-nous",
                inscription: "Inscrie Ici",
                search: 'Recherche',
                search_input: 'Recherche la formation...',
                s2title: 'INCOFORS',
                s2content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut tenetur ab facere sit beatae.'
            }
        }
    }
})
export default i18n;