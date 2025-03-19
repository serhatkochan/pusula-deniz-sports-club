'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Ekibimiz', href: '/team' },
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
                className={`ml-4 btn-primary text-sm px-5 py-2.5 transition-all ${
                  scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-gradient-to-b from-blue-600 to-blue-900 lg:hidden z-40 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center">
              <div className="bubble-container">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
              </div>
              
              <nav className="w-full max-w-md">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <Link 
                      href={item.href}
                      className="block py-3 px-4 text-xl font-medium text-white text-center rounded-lg hover:bg-blue-500/30 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 shine"
                    onClick={() => setIsOpen(false)}
                  >
                    Ücretsiz Deneme Dersi
                  </Link>
                </motion.div>
              </nav>
            </div>
            
            <div className="py-8 text-center text-white/70 text-sm">
              <p>© 2023 Pusula Deniz Spor Kulübü</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 