'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 z-50">
      {/* Dalga animasyonu */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="wave-container" style={{ height: '200px', position: 'absolute', bottom: 0, width: '100%' }}>
          <div className="waves back">
            <svg viewBox="0 24 150 28">
              <defs>
                <path id="gentle-wave-back-loading" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <use xlinkHref="#gentle-wave-back-loading" x="48" y="5" fill="rgba(14, 165, 233, 0.3)" />
              <use xlinkHref="#gentle-wave-back-loading" x="48" y="7" fill="rgba(2, 132, 199, 0.2)" />
            </svg>
          </div>
          <div className="waves front">
            <svg viewBox="0 24 150 28">
              <defs>
                <path id="gentle-wave-front-loading" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <use xlinkHref="#gentle-wave-front-loading" x="48" y="0" fill="rgba(3, 105, 161, 0.4)" />
              <use xlinkHref="#gentle-wave-front-loading" x="48" y="3" fill="rgba(7, 89, 133, 0.3)" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Baloncuk animasyonları */}
      <div className="bubble-container absolute inset-0 z-0">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      {/* Ana içerik */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-md text-center">
        {/* Yüzücü animasyonu */}
        <div className="relative mb-12">
          <div className="swimmer">
            <div className="swimmer-body">
              <div className="swimmer-head"></div>
              <div className="swimmer-arm left"></div>
              <div className="swimmer-arm right"></div>
              <div className="swimmer-leg left"></div>
              <div className="swimmer-leg right"></div>
            </div>
          </div>
        </div>
        
        {/* Yükleme mesajı */}
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Yüzüyoruz...</h3>
        <p className="text-blue-600 mb-6">Pusula Deniz Spor Kulübü'ne hoş geldiniz</p>
        
        {/* Yükleme animasyonu - küçük indeterminite dalga animasyonu */}
        <div className="w-32 h-2 relative mb-8">
          <div className="absolute inset-0 bg-blue-300 opacity-40 rounded-full"></div>
          <div className="absolute left-0 top-0 h-2 bg-blue-500 rounded-full w-8 animate-wave-loading"></div>
        </div>

        {/* Yükleme sonrası içerik */}
        {isComplete ? (
          <div className="text-xl text-blue-100 font-medium tracking-wide">
            Hoş Geldiniz!
          </div>
        ) : (
          <div className="text-xl text-blue-100 font-medium tracking-wide">
            Dalış için hazırlanıyor...
          </div>
        )}
      </div>
      
      {/* Pusula logo */}
      <div className="absolute bottom-16 animate-pulse flex flex-col items-center">
        <Image 
          src="/images/logo.png" 
          alt="Pusula Deniz Spor Kulübü" 
          width={150}
          height={50}
          className="h-32 object-contain brightness-100"
        />
      </div>

      <style jsx>{`
        .swimmer {
          position: relative;
          width: 100px;
          height: 60px;
          animation: swim 3s infinite ease-in-out;
        }
        
        .swimmer-body {
          position: absolute;
          width: 60px;
          height: 20px;
          background-color: #0284c7;
          border-radius: 30px;
          transform: rotate(-10deg);
        }
        
        .swimmer-head {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #0284c7;
          border-radius: 50%;
          left: -10px;
          top: -10px;
        }
        
        .swimmer-arm {
          position: absolute;
          width: 30px;
          height: 8px;
          background-color: #0284c7;
          border-radius: 4px;
        }
        
        .swimmer-arm.left {
          top: -10px;
          left: 15px;
          transform-origin: left center;
          animation: stroke 1s infinite alternate ease-in-out;
        }
        
        .swimmer-arm.right {
          top: 20px;
          left: 15px;
          transform-origin: left center;
          animation: stroke 1s infinite alternate-reverse ease-in-out;
        }
        
        .swimmer-leg {
          position: absolute;
          width: 25px;
          height: 8px;
          background-color: #0284c7;
          border-radius: 4px;
          right: -15px;
        }
        
        .swimmer-leg.left {
          top: 0px;
          transform-origin: left center;
          animation: kick 0.5s infinite alternate ease-in-out;
        }
        
        .swimmer-leg.right {
          top: 12px;
          transform-origin: left center;
          animation: kick 0.5s infinite alternate-reverse ease-in-out;
        }
        
        @keyframes swim {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes stroke {
          0% { transform: rotate(-45deg); }
          100% { transform: rotate(45deg); }
        }
        
        @keyframes kick {
          0% { transform: rotate(-25deg); }
          100% { transform: rotate(25deg); }
        }
      `}</style>
    </div>
  );
} 