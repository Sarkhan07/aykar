'use client';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function HakkimizdaPage() {
  return (
    <>

      <Navbar />
      <section className="px-8 py-16 bg-white min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Hakkımızda</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-4 text-gray-700">
              Aykar Vending olarak, modern otomat sistemleriyle müşterilerimize hızlı, kaliteli ve güvenilir hizmet sunmayı amaçlıyoruz. Özellikle Marmaray istasyonlarında konumlanan makinelerimizle yolculara taze ve çeşitli ürünler sağlıyoruz.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Gelişmiş teknolojiye sahip otomatlarımız sayesinde içecekler, atıştırmalıklar ve günlük ihtiyaç ürünlerini kesintisiz bir şekilde temin edebilirsiniz. Hijyen ve kalite standartlarımızla her zaman müşterilerimizin memnuniyetini ön planda tutuyoruz.
            </p>
            <p className="text-lg text-gray-700">
              Müşteri odaklı yaklaşımımız ve sürekli gelişen altyapımızla sektörde öncü olmaya devam ediyoruz.
            </p>
          </div>

          <div>
            <Image src="/foto3.jpg" alt="Hakkımızda" width={600} height={400} className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
