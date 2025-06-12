'use client';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function IletisimPage() {
  return (
    <>

      <Navbar />
      <section className="px-8 py-16 bg-white min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">İletişim</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-8 w-8 text-blue-500" />
              <span className="text-lg text-gray-700">+90 555 123 4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-500" />
              <span className="text-lg text-gray-700">info@aykarvending.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-8 w-8 text-blue-500" />
              <span className="text-lg text-gray-700">İzmir, Türkiye</span>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Adınız"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded w-full">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
