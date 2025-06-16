'use client';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function IletisimPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSended, setIsSended] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert('Lütfen tüm alanları doldurun');
      return;
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, message })
      });

      const data = await res.json();
      if (data.ok) {
        setIsSended(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Mesaj gönderilemedi');
      }
    } catch (err) {
      console.error(err);
      alert('Bir hata oluştu');
    }
  };

  return (
    <>
      <Navbar />
      <section className="px-8 py-16 bg-white min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Öneri / Şikayet</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-8 w-8 text-blue-500" />
              <span className="text-lg text-gray-700">+90 532 478 98 13</span>
            </div>
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-8 w-8 text-blue-500" />
              <span className="text-lg text-gray-700">otomataykar@hotmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-8 w-8 text-blue-500" />
              <span className="text-lg text-gray-700">Küçükçekmece / İstanbul, Türkiye</span>
            </div>
          </div>

          <div>
            {isSended ? (
              <div className="text-green-500 text-center text-lg">Mesaj gönderildi!</div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  className="w-full p-3 border border-gray-300 rounded text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Mesajınız"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded text-black"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded w-full text-black cursor-pointer">
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
