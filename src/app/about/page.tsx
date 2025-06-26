'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/locales/translations';

export default function HakkimizdaPage() {

  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>

      <Navbar />
      <section className="px-8 py-16 bg-white min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">{t.about}</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-4 text-gray-700">
              {t.about1}
            </p>
            <p className="text-lg mb-4 text-gray-700">
              {t.about2}
            </p>
            <p className="text-lg text-gray-700">
              {t.about3}
            </p>
          </div>

          <div>
            <img src="/foto3.jpg" alt="Hakkımızda" width="600" height="400" className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
