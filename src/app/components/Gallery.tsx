'use client';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/locales/translations';

export default function Gallery() {
  const images = ['yeni1.jpg', 'yeni2.jpg', 'otomat3.jpg', 'otomat4.jpg', 'otomat5.jpg', 'otomat6.jpg'];
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">{t.gallery}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-white">
            <img
              src={`/${img}`}
              alt={`Galeri ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="/galery">
          <button className="bg-blue-500 text-white px-8 py-3 rounded transition duration-300 hover:bg-blue-600 cursor-pointer">
            {t.galleryButton}
          </button>
        </a>
      </div>
    </section>
  )
}
