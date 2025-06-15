'use client';
import Image from 'next/image';

export default function Gallery() {
  const images = ['otomat1.jpg', 'otomat2.jpg', 'otomat3.jpg', 'otomat4.jpg', 'otomat5.jpg', 'otomat6.jpg'];

  return (
    <section className="px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Galeri</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src={`/${img}`}
              alt={`Galeri ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="/galery">
          <button className="bg-blue-500 text-white px-8 py-3 rounded transition duration-300 hover:bg-blue-600 cursor-pointer">
            Galeriyi Gör
          </button>
        </a>
      </div>
    </section>
  )
}
