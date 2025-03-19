'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [testimonialRef] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center ocean-gradient-deep">
        {/* Baloncuk animasyonları */}
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        {/* Arka plan ve overlay */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.85) contrast(1.1)'
          }}
        ></div>
        
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-blue-700/20 z-0"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pusula Deniz Spor Kulübü
          </motion.h1>
          <motion.div 
            className="divider divider-light mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Profesyonel eğitmenler eşliğinde en iyi yüzme deneyimi
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link 
              href="/contact" 
              className="btn-primary shine transition-all hover:-translate-y-2 w-64 text-center"
            >
              Bize Ulaşın
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary transition-all hover:-translate-y-2 w-64 text-center"
            >
              Hizmetlerimiz
            </Link>
          </motion.div>

          {/* Keşfet Scroll Indicator - butonların altına taşındı */}
          <motion.div 
            className="mt-28 text-center cursor-pointer mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
          >
            <div className="flex flex-col items-center">
              <span className="text-white font-medium text-shadow-md text-sm mb-3">Keşfet</span>
              <motion.div 
                animate={{ 
                  y: [0, 10, 0], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
                className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1 shadow-lg bg-blue-500/20 backdrop-blur-sm"
              >
                <motion.div 
                  animate={{ 
                    y: [0, 16, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-3 bg-white rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative">
        {/* Su altı dekoratif öğeleri */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-blue-300 floating-slow"></div>
          <div className="absolute top-40 right-1/4 w-48 h-48 rounded-full bg-blue-400 floating"></div>
          <div className="absolute bottom-20 left-1/3 w-56 h-56 rounded-full bg-blue-200 floating-fast"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl font-bold mb-4 text-gray-800 wavy-underline"
            >
              Hakkımızda
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={aboutInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              2010 yılından bu yana, Pusula Deniz Spor Kulübü olarak, her yaştan ve seviyeden öğrencilerimize kaliteli yüzme eğitimi sunuyoruz. Profesyonel eğitmenlerimiz ve modern tesislerimiz ile öğrencilerimizin gelişimlerini en üst seviyeye taşıyoruz.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                title: "Profesyonel Eğitim",
                description: "Deneyimli eğitmenlerimiz ile her yaş grubu için özel programlar",
                icon: "🏊‍♂️"
              },
              {
                title: "Modern Tesisler",
                description: "Uluslararası standartlarda yüzme havuzları ve spor alanları",
                icon: "🏆"
              },
              {
                title: "Yarışma Hazırlık",
                description: "Ulusal ve uluslararası yarışmalara hazırlayan özel programlar",
                icon: "⏱️"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center card-hover"
              >
                <div className="text-5xl mb-4 floating">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        {/* Eski dalga animasyonu kaldırıldı */}
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 wavy-underline"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Hizmetlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={servicesInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pusula Deniz Spor Kulübü&apos;nde sunduğumuz profesyonel hizmetler
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Özel Dersler */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6 overflow-hidden rounded-xl shadow-lg img-overlay">
                <Image
                  src="/images/private-lesson.jpg"
                  alt="Özel Dersler"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Özel Dersler</h3>
                <p className="text-gray-700">Birebir özel derslerle kişiye özel yüzme eğitimi.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Grup Dersleri */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6 overflow-hidden rounded-xl shadow-lg img-overlay">
                <Image
                  src="/images/group-lesson.jpg"
                  alt="Grup Dersleri"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Grup Dersleri</h3>
                <p className="text-gray-700">Yaş ve seviye gruplarına göre eğlenceli grup dersleri.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Yarışma Hazırlık */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-48 overflow-hidden img-overlay shine">
                <Image
                  src="/images/competition.jpg" 
                  alt="Yarışma Hazırlık Programı" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Yarışma Hazırlık</h3>
                <p className="text-gray-700">Profesyonel yarışmalara hazırlık programları.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Yaz Kampı */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-48 overflow-hidden img-overlay shine">
          <Image
                  src="/images/summer-camp.jpg"
                  alt="Yaz Kampı"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Yaz Kampı</h3>
                <p className="text-gray-700">Çocuklar için eğlenceli ve eğitici yaz kampları.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 ocean-gradient text-white relative overflow-hidden">
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-shadow-md">Hemen Başlayın</h2>
          <motion.div 
            className="divider divider-light mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow-sm">Profesyonel eğitmenlerimiz eşliğinde yüzme öğrenmek veya tekniklerinizi geliştirmek için hemen iletişime geçin.</p>
          <Link
            href="/contact"
            className="btn-primary shine transition-all hover:-translate-y-2"
          >
            Ücretsiz Deneme Dersi
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Su altı dekoratif öğeleri */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-blue-100 opacity-20 floating-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-52 h-52 rounded-full bg-blue-200 opacity-20 floating"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 pt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 wavy-underline">Bizimle Çalışanlar Ne Diyor?</h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Öğrencilerimizin ve velilerimizin deneyimleri</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt="Müşteri Yorumu"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Ayşe Yılmaz</h3>
                  <p className="text-sm text-blue-600">Veli</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Kızımın yüzme korkusu vardı, ancak Pusula&apos;daki eğitmenler sayesinde şimdi suda kendini balık gibi hissediyor! Güler yüzlü ve profesyonel yaklaşımları için teşekkür ederiz.&rdquo;
              </p>
              <div className="mt-3 flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
                    src="/images/testimonial-2.jpg"
                    alt="Müşteri Yorumu"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Mehmet Demir</h3>
                  <p className="text-sm text-blue-600">Öğrenci</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Oğlum için en doğru tercih Pusula oldu. Bireysel ilgi ve profesyonel eğitim sayesinde yüzme tekniklerini hızla öğrendi ve şimdi yarışmalara hazırlanıyor.&rdquo;
              </p>
              <div className="mt-3 flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
                    src="/images/testimonial-3.jpg"
                    alt="Müşteri Yorumu"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Can Öztürk</h3>
                  <p className="text-sm text-blue-600">Lisanslı Sporcu</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Yetişkin yüzme kursları için araştırma yaparken Pusula&apos;yı buldum. 40 yaşında yüzme öğrenebileceğimi düşünmüyordum, ancak sabırlı eğitmenler sayesinde başardım!&rdquo;
              </p>
              <div className="mt-3 flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 ocean-gradient text-white relative overflow-hidden">
        {/* Su dalgaları animasyonu kaldırıldı */}
        
        {/* Baloncuk animasyonları */}
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 pt-12">
          <h2 className="text-2xl font-bold mb-2 text-shadow-md">Siz de Yüzmeyi Öğrenmek İster misiniz?</h2>
          <motion.div 
            className="divider divider-light mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-lg text-white mb-6 text-shadow-sm">Her yaş ve seviye için özel programlarımızla sizleri bekliyoruz</p>
          <Link
            href="/contact"
            className="btn-primary shine transition-all hover:-translate-y-1"
          >
            İletişime Geçin
          </Link>
    </div>
      </section>
    </main>
  );
}
