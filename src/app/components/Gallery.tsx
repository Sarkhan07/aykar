'use client';
import Image from 'next/image';

export default function Gallery() {
  const images = ['4.jpg', 'foto3.jpg', 'OTOMAT1.jpg', 'OTOMAT2.jpg'];


  return (
    <section className="px-8 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Galeri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <Image key={idx} src={`/${img}`} alt={`Galeri ${idx + 1}`} width={400} height={300} className="rounded-lg" />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href="/galery">
          <button className="bg-blue-500 text-white px-8 py-3 rounded">Galeriyi Gör</button>
        </a>
      </div>
    </section>
  )
}
