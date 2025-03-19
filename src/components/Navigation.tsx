'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Başarılar', href: '/achievements' },
  { name: 'Ekibimiz', href: '/team' },
  { name: 'SSS', href: '/faq' },
  { name: 'İletişim', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Temizleme fonksiyonu
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <img 
                src="/images/logo.png" 
                alt="Pusula Deniz Spor Kulübü" 
                className={`${scrolled ? 'h-14' : 'h-16'} transition-all duration-300 object-contain ${
                  scrolled ? '' : 'brightness-0 invert'
                }`} 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(-1)}
              >
                <Link 
                  href={item.href}
                  className={`relative px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                  {activeIndex === index && (
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link 
                href="/contact" 
                className={`ml-4 btn-primary transition-all shine hover:-translate-y-1 text-sm px-5 py-2.5 ${
                  scrolled ? '' : 'btn-white'
                }`}
              >
                Ücretsiz Deneme Dersi
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-50">
            <button 
              onClick={toggleMenu}
              className={`flex flex-col justify-center items-center w-10 h-10 rounded-full ${
                scrolled 
                  ? (isOpen ? 'text-white' : 'text-blue-600') 
                  : 'text-white'
              } focus:outline-none`}
              aria-label="Menu"
            >
              <span 
                className={`block w-6 h-0.5 my-0.5 transition-all duration-300 ${
                  isOpen 
                    ? 'transform rotate-45 translate-y-1.5 bg-white' 
                    : scrolled ? 'bg-blue-600' : 'bg-white'
                }`} 
              />
              <span 
                className={`block w-6 h-0.5 my-0.5 transition-all duration-300 ${
                  isOpen 
                    ? 'opacity-0' 
                    : scrolled ? 'bg-blue-600' : 'bg-white'
                }`} 
              />
              <span 
                className={`block w-6 h-0.5 my-0.5 transition-all duration-300 ${
                  isOpen 
                    ? 'transform -rotate-45 -translate-y-1.5 bg-white' 
                    : scrolled ? 'bg-blue-600' : 'bg-white'
                }`} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 lg:hidden z-40 menu-reveal overflow-hidden ${isOpen ? 'menu-reveal-open' : ''}`}
      >
        <motion.div 
          className="w-full h-full ocean-menu-bg flex flex-col"
          initial={false}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Su dalgası animasyonu */}
          <div className="wave-animation" style={{ height: '120px', bottom: 0, position: 'absolute', width: '100%', zIndex: 1 }}>
            <div className="wave-container">
              <div className="waves back">
                <svg viewBox="0 24 150 28">
                  <defs>
                    <path id="gentle-wave-back" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <use xlinkHref="#gentle-wave-back" x="48" y="5" />
                  <use xlinkHref="#gentle-wave-back" x="48" y="7" />
                </svg>
              </div>
              <div className="waves front">
                <svg viewBox="0 24 150 28">
                  <defs>
                    <path id="gentle-wave-front" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <use xlinkHref="#gentle-wave-front" x="48" y="0" />
                  <use xlinkHref="#gentle-wave-front" x="48" y="3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Baloncuk animasyonları */}
          <div className="bubble-container">
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
          
          {/* Balıklar */}
          <div className="fish-container">
            {/* Sağdan sola yüzen balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '110%', y: '20%', opacity: 0, scale: 0.8 }}
              animate={{ 
                x: '-10%', 
                y: ['20%', '25%', '18%', '20%'], 
                opacity: [0, 0.6, 0.6, 0], 
                scale: 0.8
              }}
              transition={{ 
                x: { duration: 25, repeat: Infinity, repeatDelay: 15 },
                y: { duration: 5, repeat: Infinity, repeatType: 'mirror' },
                opacity: { duration: 25, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 15 }
              }}
            >
              🐟
            </motion.div>
            
            {/* Sağdan sola yüzen balık 2 */}
            <motion.div 
              className="fish"
              initial={{ x: '110%', y: '90%', opacity: 0, scale: 0.7 }}
              animate={{ 
                x: '-10%', 
                y: ['90%', '85%', '92%', '90%'], 
                opacity: [0, 0.6, 0.6, 0], 
                scale: 0.7
              }}
              transition={{ 
                x: { duration: 28, repeat: Infinity, repeatDelay: 5 },
                y: { duration: 6, repeat: Infinity, repeatType: 'mirror' },
                opacity: { duration: 28, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 5 }
              }}
            >
              🐟
            </motion.div>
            
            {/* Ekranın ortasında beliren balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '50%', y: '45%', opacity: 0, scale: 0.1 }}
              animate={{ 
                x: '50%', 
                y: '45%', 
                opacity: [0, 0.7, 0], 
                scale: [0.1, 1.2, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatDelay: 12,
                times: [0, 0.5, 1]
              }}
            >
              🐠
            </motion.div>
            
            {/* Ekranın ortasında beliren balık 2 */}
            <motion.div 
              className="fish"
              initial={{ x: '25%', y: '65%', opacity: 0, scale: 0.1 }}
              animate={{ 
                x: '25%', 
                y: '65%', 
                opacity: [0, 0.7, 0], 
                scale: [0.1, 1.0, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatDelay: 18,
                times: [0, 0.5, 1]
              }}
            >
              🐠
            </motion.div>
            
            {/* Ekranın ortasında beliren balık 3 */}
            <motion.div 
              className="fish"
              initial={{ x: '75%', y: '25%', opacity: 0, scale: 0.1 }}
              animate={{ 
                x: '75%', 
                y: '25%', 
                opacity: [0, 0.7, 0], 
                scale: [0.1, 0.9, 0.1],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                repeatDelay: 15,
                times: [0, 0.5, 1]
              }}
            >
              🐠
            </motion.div>
            
            {/* Alt kısımdan yukarı doğru yüzen balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '70%', y: '110%', opacity: 0, scale: 1.2 }}
              animate={{ 
                x: ['70%', '65%', '75%', '70%'], 
                y: '-10%', 
                opacity: [0, 0.6, 0.6, 0],
                scale: 1.2 
              }}
              transition={{ 
                y: { duration: 20, repeat: Infinity, repeatDelay: 18 },
                x: { duration: 5, repeat: Infinity, repeatType: 'mirror' },
                opacity: { duration: 20, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 18 }
              }}
            >
              🦑
            </motion.div>
            
            {/* Alt kısımdan yukarı doğru yüzen balık 2 */}
            <motion.div 
              className="fish"
              initial={{ x: '30%', y: '110%', opacity: 0, scale: 1.0 }}
              animate={{ 
                x: ['30%', '25%', '35%', '30%'], 
                y: '-10%', 
                opacity: [0, 0.6, 0.6, 0],
                scale: 1.0 
              }}
              transition={{ 
                y: { duration: 22, repeat: Infinity, repeatDelay: 6 },
                x: { duration: 4, repeat: Infinity, repeatType: 'mirror' },
                opacity: { duration: 22, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 6 }
              }}
            >
              🦑
            </motion.div>
            
            {/* Ekranda daire çizen balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '30%', y: '30%', opacity: 0, scale: 0.9 }}
              animate={{ 
                x: ['30%', '70%', '70%', '30%', '30%'], 
                y: ['30%', '30%', '70%', '70%', '30%'],
                opacity: [0, 0.6, 0.6, 0.6, 0],
                scale: 0.9
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                repeatDelay: 5,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >
              🐡
            </motion.div>
            
            {/* Ekranda daire çizen balık 2 - ters yönde */}
            <motion.div 
              className="fish"
              initial={{ x: '70%', y: '70%', opacity: 0, scale: 0.8 }}
              animate={{ 
                x: ['70%', '30%', '30%', '70%', '70%'], 
                y: ['70%', '70%', '30%', '30%', '70%'],
                opacity: [0, 0.6, 0.6, 0.6, 0],
                scale: 0.8
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                repeatDelay: 10,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >
              🐡
            </motion.div>
            
            {/* Ekranda çapraz geçen balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '-10%', y: '80%', opacity: 0, scale: 1.1 }}
              animate={{ 
                x: '110%', 
                y: '10%', 
                opacity: [0, 0.6, 0.6, 0],
                scale: 1.1,
                rotate: 15
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatDelay: 10,
                times: [0, 0.1, 0.9, 1]
              }}
            >
              🐬
            </motion.div>
            
            {/* Ekranda çapraz geçen balık 2 - ters yönde */}
            <motion.div 
              className="fish"
              initial={{ x: '110%', y: '80%', opacity: 0, scale: 1.0 }}
              animate={{ 
                x: '-10%', 
                y: '10%', 
                opacity: [0, 0.6, 0.6, 0],
                scale: 1.0,
                rotate: -15
              }}
              transition={{ 
                duration: 18, 
                repeat: Infinity,
                repeatDelay: 13,
                times: [0, 0.1, 0.9, 1]
              }}
            >
              🐬
            </motion.div>
            
            {/* Ekranın üstünde duran ve aşağı doğru inen balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '10%', y: '-10%', opacity: 0, scale: 1.3 }}
              animate={{ 
                x: ['10%', '15%', '5%', '10%'], 
                y: '110%', 
                opacity: [0, 0.5, 0.5, 0],
                scale: 1.3,
                rotate: 180
              }}
              transition={{ 
                y: { duration: 18, repeat: Infinity, repeatDelay: 12 },
                x: { duration: 4, repeat: Infinity, repeatType: 'mirror' },
                opacity: { duration: 18, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 12 }
              }}
            >
              🦈
            </motion.div>
            
            {/* Ekranın üstünde duran ve aşağı doğru inen balık 2 */}
            <motion.div 
              className="fish"
              initial={{ x: '60%', y: '-10%', opacity: 0, scale: 1.1 }}
              animate={{ 
                x: ['60%', '65%', '55%', '60%'], 
                y: '110%', 
                opacity: [0, 0.5, 0.5, 0],
                scale: 1.1,
                rotate: 180
              }}
              transition={{ 
                y: { duration: 15, repeat: Infinity, repeatDelay: 20 },
                x: { duration: 3, repeat: Infinity, repeatType: 'mirror' },
                opacity: { duration: 15, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 20 }
              }}
            >
              🦈
            </motion.div>
            
            {/* Ekranın bir kenarından belirip kaybolan balık 1 */}
            <motion.div 
              className="fish"
              initial={{ x: '90%', y: '50%', opacity: 0, scale: 1 }}
              animate={{ 
                x: ['90%', '70%', '90%'], 
                y: '50%', 
                opacity: [0, 0.6, 0],
                scale: [1, 1.2, 1],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatDelay: 8,
                times: [0, 0.5, 1]
              }}
            >
              🐙
            </motion.div>
            
            {/* Ekranın bir kenarından belirip kaybolan balık 2 */}
            <motion.div 
              className="fish"
              initial={{ x: '10%', y: '40%', opacity: 0, scale: 0.9 }}
              animate={{ 
                x: ['10%', '30%', '10%'], 
                y: '40%', 
                opacity: [0, 0.6, 0],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                repeatDelay: 12,
                times: [0, 0.5, 1]
              }}
            >
              🐙
            </motion.div>
          </div>
          
          <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center relative z-10">
            <nav className="w-full max-w-md">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="relative rounded-xl overflow-hidden group shine">
                    <Link 
                      href={item.href}
                      className="block py-3 px-4 text-xl font-medium text-white text-center relative overflow-hidden transition-all duration-300 z-10"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-blue-600/40"
                        initial={{ opacity: 0, y: "100%" }}
                        whileHover={{ opacity: 1, y: 0 }}
                        whileTap={{ opacity: 1, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              ))}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
              >
                <div className="relative overflow-hidden shine rounded-full inline-block">
                  <Link 
                    href="/contact" 
                    className="btn-primary btn-white text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span 
                      className="relative z-10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ücretsiz Deneme Dersi
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </nav>
          </div>
          
          <div className="py-8 text-center text-white/70 text-sm">
            <p>© 2023 Pusula Deniz Spor Kulübü</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
} 