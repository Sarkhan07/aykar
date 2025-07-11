'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/locales/translations';

export default function GaleriPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const images = ['yeni1.jpg', 'yeni2.jpg', 'otomat3.jpg', 'otomat4.jpg', 'otomat5.jpg', 'otomat6.jpg', 'otomat7.jpg'];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Navbar />
      <section className="px-8 py-16 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">{t.galleryTitle}</h2>

        <div className="relative w-full max-w-4xl mx-auto h-[600px]">
          <img
            src={`/${images[current]}`}
            alt={`Galeri ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Previous Button */}
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
            ‹
          </button>
          {/* Next Button */}
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
            ›
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          {images.map((img, idx) => (
            <div key={idx} onClick={() => setCurrent(idx)} className={`cursor-pointer ${current === idx ? 'ring-4 ring-blue-500' : ''}`}>
              <img src={`/${img}`} alt={`Thumbnail ${idx + 1}`} width="100" height="80" className="rounded object-cover aspect-[4/3] " />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
