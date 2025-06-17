'use client';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/locales/translations';


export default function Footer() {

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="px-8 py-12 bg-black text-white">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">{t.contactUs}</h3>
          <p>{t.email}: otomataykar@hotmail.com</p>
          <p>{t.phone}: +90 532 478 98 13</p>
          <p>{t.address}</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">{t.links}</h3>
          <ul>
            <li><a href="/">{t.home}</a></li>
            <li><a href="/galery">{t.gallery}</a></li>
            <li><a href="/about">{t.about}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">{t.contactTitle}</h3>
          <input className="p-2 w-full mb-2 text-black" placeholder="Email adresiniz" />
          <a href="/contact"><button className="bg-blue-500 w-full p-2 cursor-pointer">{t.suggestionComplaint}</button></a>
        </div>
      </div>
    </footer>
  )
}
