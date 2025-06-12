'use client';
export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-black text-white">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">İletişim</h3>
          <p>Email: info@aykar.com</p>
          <p>Telefon: +90 555 123 45 67</p>
          <p>Adres: İstanbul, Türkiye</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Linkler</h3>
          <ul>
            <li>Anasayfa</li>
            <li>Galeri</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Bülten</h3>
          <input className="p-2 w-full mb-2 text-black" placeholder="Email adresiniz" />
          <button className="bg-blue-500 w-full p-2">Abone Ol</button>
        </div>
      </div>
    </footer>
  )
}
