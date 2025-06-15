'use client';
export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-black text-white">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">İletişim</h3>
          <p>Email: otomataykar@hotmail.com</p>
          <p>Telefon: +90 532 478 98 13</p>
          <p>Adres: Küçükçekmece / İstanbul, Türkiye</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Linkler</h3>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/galery">Galeri</a></li>
            <li><a href="/about">Hakkımızda</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Öneri / Şikayet</h3>
          <input className="p-2 w-full mb-2 text-black" placeholder="Email adresiniz" />
          <a href="/contact"><button className="bg-blue-500 w-full p-2 cursor-pointer">Öneri / Şikeyet İçin Tıklayın</button></a>
        </div>
      </div>
    </footer>
  )
}
