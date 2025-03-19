'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Mobil cihazlarda daha düşük kaliteli resim için src'yi değiştir
  const optimizedSrc = isMobile 
    ? src.replace(/\.(jpg|jpeg|png)$/i, '-mobile.$1') 
    : src;
  
  // Eğer -mobile versiyonu yoksa orijinal kullan
  const handleError = () => {
    if (isMobile) {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  };
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <motion.div 
          className="absolute inset-0 bg-blue-100 rounded overflow-hidden"
          animate={{ 
            background: ['#e0f2fe', '#bae6fd', '#e0f2fe'], 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      )}
      
      <Image 
        src={priority || !isMobile ? src : optimizedSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width || 500}
        height={height || 300}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
} 