import { useTranslation } from "react-i18next";


const ChangLanguages = () => {
    const { t , i18n } = useTranslation();
    const languages = [
        {code : "en" , name : "English"},
        {code : 'ar' , name : "Arabic"},
        {code: "fr" , name : "Français"},
    ];
  return (
    <div>
    {languages.map((language)=>(
        <button onClick={()=> i18n.changeLanguage(language.code)} key={language.code}>
                {language.name }
            </button>
        ))}
    </div>
  )
}

export default ChangLanguages