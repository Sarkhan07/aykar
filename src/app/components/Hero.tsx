'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const slides = ['/slider/slide1.jpg', '/slider/slide2.jpg', '/slider/slide3.jpg', '/slider/slide4.jpg'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 h-screen overflow-hidden">


      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        <Image
          src={slides[current]}
          alt="Background Slide"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>


      <div className="md:w-1/2 z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Marmaray İstasyonlarında Otomatlar</h1>
        <p className="mb-6">Aykar’ın modern otomat makineleri ile Marmaray istasyonlarında kesintisiz atıştırmalık keyfi.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Daha Fazla</button>
      </div>


    </section>
  );
}
