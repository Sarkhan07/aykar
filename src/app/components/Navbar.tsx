'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { translations } from '@/locales/translations';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const t = translations[language];

  const changeLanguage = (lang: 'tr' | 'en' | 'ar') => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Aykar Logo" width={40} height={40} />
              <span className="font-bold text-lg sm:text-xl text-black">{t.brand}</span>
            </a>
          </div>


          <div className="hidden md:flex space-x-6 items-center font-medium text-black">
            <a href="/">{t.home}</a>
            <a href="/galery">{t.gallery}</a>
            <a href="/about">{t.about}</a>
            <a href="/contact">{t.contactTitle}</a>


            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center space-x-1 text-amber-900 hover:text-amber-700"
              >
                <GlobeAltIcon className="h-6 w-6" />
                <span className="text-sm font-medium">
                  {language === 'tr' && 'TR'}
                  {language === 'en' && 'EN'}
                  {language === 'ar' && 'AR'}
                </span>
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
                  <ul className="py-1 text-sm">
                    {language !== 'tr' && (
                      <li>
                        <button
                          onClick={() => {
                            changeLanguage('tr');
                            setLanguageMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Türkçe
                        </button>
                      </li>
                    )}
                    {language !== 'en' && (
                      <li>
                        <button
                          onClick={() => {
                            changeLanguage('en');
                            setLanguageMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          English
                        </button>
                      </li>
                    )}
                    {language !== 'ar' && (
                      <li>
                        <button
                          onClick={() => {
                            changeLanguage('ar');
                            setLanguageMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          العربية
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XMarkIcon className="h-6 w-6 text-black" /> : <Bars3Icon className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-black font-medium">
          <a href="/" className="block">{t.home}</a>
          <a href="/galery" className="block">{t.gallery}</a>
          <a href="/about" className="block">{t.about}</a>
          <a href="/contact" className="block">{t.contact}</a>

          <div className="pt-4 border-t mt-4">
            <p className="text-sm text-gray-500 mb-1">{t.lan}:</p>
            <div className="space-y-1">
              {language !== 'tr' && (
                <button onClick={() => changeLanguage('tr')} className="block w-full text-left">
                  Türkçe
                </button>
              )}
              {language !== 'en' && (
                <button onClick={() => changeLanguage('en')} className="block w-full text-left">
                  English
                </button>
              )}
              {language !== 'ar' && (
                <button onClick={() => changeLanguage('ar')} className="block w-full text-left">
                  العربية
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
