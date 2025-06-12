'use client';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GaleriPage() {
  const images = ['4.jpg', 'foto3.jpg', 'OTOMAT1.jpg', 'OTOMAT2.jpg'];

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
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Galeri</h2>

        <div className="relative w-full max-w-4xl mx-auto h-[600px]">
          <Image
            src={`/${images[current]}`}
            alt={`Galeri ${current + 1}`}
            fill
            className="rounded-lg object-cover"
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
              <Image src={`/${img}`} alt={`Thumbnail ${idx + 1}`} width={100} height={80} className="rounded object-cover" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
