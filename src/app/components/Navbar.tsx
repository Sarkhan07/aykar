'use client';
import Image from 'next/image';
import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Aykar Logo" width={50} height={50} />
        <span className="font-bold text-xl">Aykar</span>
      </div>
      <ul className="flex space-x-6 font-medium text-black">
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#">Galeri</a></li>
        <li><a href="#">Otomatlar</a></li>
        <li><a href="#">Hakkımızda</a></li>
        <li><a href="#">İletişim</a></li>

        <button className="flex items-center space-x-2 text-amber-950 text-shadow-amber-950">
          <GlobeAltIcon className="h-6 w-6" />
        </button>
        <li><a href="#">EN</a></li>
      </ul>
    </nav>
  )
}
