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
    <main className="min-h-screen flex flex-col items-center justify-center ocean-menu-bg overflow-hidden relative text-white">
      {/* Baloncuk animasyonları */}
      <div className="bubble-container absolute inset-0 z-0">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      {/* Balık animasyonları */}
      <div className="fish-container">
        <motion.div 
          className="fish"
          initial={{ x: '-10%', y: '80%', opacity: 0, scale: 1.1 }}
          animate={{ 
            x: '110%', 
            y: ['80%', '75%', '85%', '80%'], 
            opacity: [0, 0.6, 0.6, 0], 
            scale: 1.1
          }}
          transition={{ 
            x: { duration: 25, repeat: Infinity, repeatDelay: 15 },
            y: { duration: 5, repeat: Infinity, repeatType: 'mirror' },
            opacity: { duration: 25, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 15 }
          }}
        >
          🐟
        </motion.div>
        
        <motion.div 
          className="fish"
          initial={{ x: '110%', y: '60%', opacity: 0, scale: 0.7 }}
          animate={{ 
            x: '-10%', 
            y: ['60%', '55%', '65%', '60%'], 
            opacity: [0, 0.6, 0.6, 0], 
            scale: 0.7
          }}
          transition={{ 
            x: { duration: 20, repeat: Infinity, repeatDelay: 10 },
            y: { duration: 4, repeat: Infinity, repeatType: 'mirror' },
            opacity: { duration: 20, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 10 }
          }}
        >
          🐠
        </motion.div>
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
          className="text-5xl sm:text-6xl font-bold mb-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Pusula&apos;yı Kaybettik!
        </motion.h2>
        
        <div className="text-xl text-blue-100 mb-8">
          Aradığınız sayfa bulunamadı. Muhtemelen taşınmış veya silinmiş olabilir.
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/" 
            className="btn-primary bg-white text-blue-700 shine transition-all hover:-translate-y-2 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Ana Sayfaya Dön
          </Link>
        </motion.div>
      </div>

      {/* Dalga animasyonu */}
      <div className="absolute bottom-0 w-full h-[150px] overflow-hidden">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        
        <style jsx>{`
          .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background-repeat: repeat-x;
            background-position: 0 bottom;
            transform-origin: center bottom;
          }
          
          .wave1 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7' preserveAspectRatio='none'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.3-200 .7-250 49.3-394.5 49.3v31.8h800v-31.8z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E");
            background-size: 50% 100%;
            animation: wave-animation1 18s linear infinite;
            z-index: 14;
            opacity: 1;
          }
          
          .wave2 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7' preserveAspectRatio='none'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.3-200 .7-250 49.3-394.5 49.3v31.8h800v-31.8z' fill='rgba(255,255,255,0.2)'/%3E%3C/svg%3E");
            background-size: 60% 100%;
            animation: wave-animation2 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
            z-index: 13;
            opacity: 0.9;
          }
          
          .wave3 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7' preserveAspectRatio='none'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.3-200 .7-250 49.3-394.5 49.3v31.8h800v-31.8z' fill='rgba(255,255,255,0.2)'/%3E%3C/svg%3E");
            background-size: 40% 100%;
            animation: wave-animation3 30s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
            z-index: 12;
            opacity: 0.8;
          }
          
          .wave4 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7' preserveAspectRatio='none'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.3-200 .7-250 49.3-394.5 49.3v31.8h800v-31.8z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E");
            background-size: 70% 100%;
            animation: wave-animation4 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
            z-index: 11;
            opacity: 0.7;
          }
          
          @keyframes wave-animation1 {
            0% {
              transform: translateX(0) translateY(0);
            }
            50% {
              transform: translateX(-25%) translateY(3px);
            }
            100% {
              transform: translateX(-50%) translateY(0);
            }
          }
          
          @keyframes wave-animation2 {
            0% {
              transform: translateX(0) translateY(0);
            }
            50% {
              transform: translateX(-30%) translateY(-2px);
            }
            100% {
              transform: translateX(-50%) translateY(0);
            }
          }
          
          @keyframes wave-animation3 {
            0% {
              transform: translateX(0) translateY(0);
            }
            50% {
              transform: translateX(-25%) translateY(4px);
            }
            100% {
              transform: translateX(-50%) translateY(0);
            }
          }
          
          @keyframes wave-animation4 {
            0% {
              transform: translateX(0) translateY(0);
            }
            50% {
              transform: translateX(-20%) translateY(-3px);
            }
            100% {
              transform: translateX(-50%) translateY(0);
            }
          }
        `}</style>
      </div>
    </main>
  );
} 