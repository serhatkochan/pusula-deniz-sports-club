'use client';

import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 300);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 z-50">
      {/* Deniz dalgası arka plan */}
      <div className="absolute bottom-0 left-0 right-0 h-72 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="#0ea5e9" 
            fillOpacity="0.4" 
            d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,176C672,171,768,117,864,117.3C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
        
        {/* İlerleme çubuğu */}
        <div className="w-full max-w-xs bg-white bg-opacity-50 rounded-full h-4 mb-2 overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full wave-animation"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-blue-800 text-sm font-medium">%{Math.round(progress)} yüzdük</p>
      </div>
      
      {/* Pusula logo */}
      <div className="absolute bottom-8 animate-pulse">
        <div className="text-4xl">🧭</div>
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
        
        .wave-animation {
          position: relative;
          overflow: hidden;
        }
        
        .wave-animation::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: wave 2s infinite linear;
        }
        
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  );
} 