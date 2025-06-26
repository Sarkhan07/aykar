'use client';
import { translations } from '@/locales/translations';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';


export default function Hero() {
  const slides = ['/slider/slide1.jpg', '/slider/slide2.jpg', '/slider/slide3.jpg', '/slider/slide4.jpg'];
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-6 py-16 h-screen overflow-hidden">


      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        <img
          src={slides[current]}
          alt="Background Slide"

          style={{ objectFit: 'cover' }}
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="z-10 text-white text-center md:text-left max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
        <p className="mb-6 text-base sm:text-lg">{t.heroDescription}</p>
        <a href="/about">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white text-sm sm:text-base">
            {t.more}
          </button>
        </a>
      </div>
    </section>
  );
}