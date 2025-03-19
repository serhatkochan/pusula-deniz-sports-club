'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden relative">
      {/* Dalga animasyonu */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="#0ea5e9" 
            fillOpacity="0.4" 
            d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,176C672,171,768,117,864,117.3C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 opacity-80" style={{ animationDelay: '0.3s' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="#38bdf8" 
            fillOpacity="0.6" 
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,149.3C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Baloncuk animasyonları */}
      <div className="bubble-container absolute inset-0 z-0">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      {/* Kayıp pusula görseli */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="text-8xl sm:text-9xl">🧭</div>
            <div className="absolute -top-2 -right-2 text-4xl animate-ping opacity-70">💧</div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl sm:text-6xl font-bold mb-6 text-blue-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Pusula'yı Kaybettik!
        </motion.h2>
        
        <motion.p 
          className="text-lg max-w-md mb-8 text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Aradığınız sayfa yüzmeyi öğrendi ve başka bir yere yüzdü. Lütfen ana sayfaya dönün.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all hover:-translate-y-1 hover:shadow-lg inline-flex items-center shine"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Ana Sayfaya Dön
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 