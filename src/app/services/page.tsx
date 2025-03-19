'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function ServicesPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [serviceListRef, serviceListInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: 'Özel Dersler',
      description: 'Birebir özel derslerimizde, eğitmenlerimiz tamamen size odaklanarak mevcut seviyenize ve hedeflerinize göre bir program oluşturur. Her yaştan öğrenciye açık olan özel derslerimiz, yüzme öğrenmek isteyen veya tekniklerini geliştirmek isteyenler için idealdir.',
      features: [
        'Kişiye özel yüzme programı',
        'Esnek ders saatleri',
        'Hızlı ilerleme',
        'Teknik analiz ve düzeltme'
      ],
      image: '/images/private-lesson.jpg'
    },
    {
      title: 'Grup Dersleri',
      description: 'Yaş ve seviye gruplarına göre düzenlenen grup derslerimiz, eğlenceli ve motive edici bir ortamda yüzme becerilerinizi geliştirmenize olanak tanır. Grup derslerimizde maksimum 6 öğrenci bulunur, böylece her öğrenci yeterli ilgiyi görür.',
      features: [
        'Yaş ve seviyeye göre gruplar',
        'Sosyal ve eğlenceli ortam',
        'Grup motivasyonu',
        'Uygun fiyatlı dersler'
      ],
      image: '/images/group-lesson.jpg'
    },
    {
      title: 'Yarışma Hazırlık',
      description: 'Yarışma deneyimi olan eğitmenlerimiz eşliğinde profesyonel müsabakalara hazırlanın. Bu programımız, teknik gelişim, kondisyon artırma, yarışma stratejileri ve mental hazırlık gibi konuları kapsar.',
      features: [
        'İleri seviye teknik eğitim',
        'Performans analizi',
        'Yarışma simülasyonları',
        'Beslenme danışmanlığı'
      ],
      image: '/images/competition.jpg'
    },
    {
      title: 'Yaz Kampı',
      description: 'Çocuklar ve gençler için düzenlenen yaz kamplarımız, yoğun yüzme eğitiminin yanı sıra eğlenceli aktiviteler de içerir. 1 haftalık ve 2 haftalık programlar sunan kamplarımız, yaz tatilini değerlendirmek için harika bir fırsattır.',
      features: [
        'Günlük yüzme dersleri',
        'Grup aktiviteleri ve oyunlar',
        'Haftalık mini yarışmalar',
        'Sertifika programı'
      ],
      image: '/images/summer-camp.jpg'
    }
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-36 min-h-[400px] ocean-gradient text-white">
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hizmetlerimiz
          </motion.h1>
          <motion.div 
            className="divider divider-light mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 100 }}
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-shadow-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pusula Deniz Spor Kulübü&apos;nde her yaş ve seviye için profesyonel yüzme eğitimi hizmetleri
          </motion.p>
        </div>
        
        {/* Dekoratif dalga şekli */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="section-transition-wave">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1440,48L1440,120L0,120Z">
            </path>
          </svg>
        </div>
      </section>

      {/* Service Categories Section */}
      <section ref={headerRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-700 wavy-underline">
              Eğitim Kategorilerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={headerInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-800 max-w-3xl mx-auto">
              Bireysel ihtiyaçlarınıza uygun eğitim programları sunuyoruz
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Çocuklar İçin Yüzme Dersleri",
                description: "4-12 yaş arası çocuklar için özel olarak tasarlanmış eğlenceli ve güvenli yüzme dersleri. Çocuğunuzun yaşına ve seviyesine uygun gruplar ve eğitim programları.",
                icon: "🧒",
                details: ["Küçük gruplar (maksimum 6 öğrenci)", "Oyun temelli eğitim", "Su korkusunu yenme", "Temel yüzme teknikleri", "Su güvenliği eğitimi"]
              },
              {
                title: "Yetişkinler İçin Yüzme Dersleri",
                description: "Yüzme öğrenmek için asla geç değil! Yetişkinler için özel olarak tasarlanmış, kişisel ihtiyaçlarınıza uygun yüzme eğitimi programları.",
                icon: "🏊‍♂️",
                details: ["Birebir veya küçük grup dersleri", "Su korkusunu yenme", "Temel ve ileri yüzme teknikleri", "Kondisyon ve dayanıklılık", "Farklı yüzme stilleri"]
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-500 border border-gray-100 card-hover"
              >
                <div className="text-5xl mb-6 text-center floating">{category.icon}</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">{category.title}</h3>
                <p className="text-gray-800 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-800">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section ref={serviceListRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Dekoratif arka plan deseni */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-300 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={serviceListInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-700 wavy-underline">
              Detaylı Hizmetlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={serviceListInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-800 max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun özelleştirilmiş yüzme programları
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={serviceListInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Özel Dersler",
                description: "Birebir eğitim ile yüzme becerilerinizi hızla geliştirin. Kişisel ihtiyaçlarınıza göre özelleştirilmiş dersler.",
                image: "/images/private-lesson.jpg"
              },
              {
                title: "Grup Dersleri",
                description: "Benzer seviyedeki öğrencilerle birlikte yüzmeyi öğrenin. Sosyal ve ekonomik bir tercih.",
                image: "/images/group-lesson.jpg"
              },
              {
                title: "Yarışma Hazırlık",
                description: "Yetenekli yüzücülerimizi ulusal ve uluslararası yarışmalara hazırlıyoruz. Profesyonel antrenman programları.",
                image: "/images/competition.jpg"
              },
              {
                title: "Yaz Kampları",
                description: "Yaz tatillerinde çocuklara özel yüzme kampları. Eğlence ve öğrenmeyi bir araya getiren programlar.",
                image: "/images/summer-camp.jpg"
              },
              {
                title: "Yetişkin Fitness Yüzme",
                description: "Fitness amaçlı yüzme dersleri. Kondisyon ve sağlık için ideal bir seçim.",
                image: "/images/adult-fitness.jpg"
              },
              {
                title: "Su Terapisi",
                description: "Rehabilitasyon amaçlı özel su terapisi programları. Fiziksel sorunları olan bireyler için özel dersler.",
                image: "/images/water-therapy.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-500 card-hover"
              >
                <div className="h-56 overflow-hidden img-overlay">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-white text-lg font-semibold text-shadow-md">Detaylı Bilgi</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
                  <p className="text-gray-800">{service.description}</p>
                  <div className="mt-4">
                    <Link 
                      href="/contact" 
                      className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                    >
                      Bilgi Alın
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-700 wavy-underline">
              Eğitim Sürecimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={processInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p 
              className="text-xl text-gray-800 max-w-3xl mx-auto"
            >
              Pusula&apos;da yüzme eğitim süreci nasıl işler?
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative"
          >
            {/* Vertical timeline line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 z-0 hidden md:block"></div>
            
            {[
              {
                title: "Seviye Değerlendirmesi",
                description: "Deneyimli eğitmenlerimiz tarafından mevcut yüzme seviyenizi değerlendiriyoruz.",
                icon: "📋"
              },
              {
                title: "Program Oluşturma",
                description: "Seviyenize ve hedeflerinize uygun kişiselleştirilmiş bir eğitim programı hazırlıyoruz.",
                icon: "📝"
              },
              {
                title: "Eğitim Süreci",
                description: "Belirlenen programa göre, uzman eğitmenlerimiz eşliğinde yüzme derslerine başlıyorsunuz.",
                icon: "🏊‍♀️"
              },
              {
                title: "Düzenli Değerlendirme",
                description: "Gelişiminizi düzenli olarak takip ediyor ve programınızı buna göre güncelliyoruz.",
                icon: "📈"
              },
              {
                title: "İleri Seviye",
                description: "Temel becerileri kazandıktan sonra, ileri yüzme teknikleri ve farklı stillerle eğitiminize devam ediyorsunuz.",
                icon: "🏅"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`flex flex-col md:flex-row items-center mb-8 md:mb-4 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step number - Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex md:items-center md:justify-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Mobile Timeline Line */}
                <div className="absolute left-5 top-0 bottom-0 w-1.5 bg-blue-100 rounded-full z-0 md:hidden" style={{ height: "calc(100% + 1rem)" }}></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 p-6 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                } relative md:static`}>
                  {/* Mobile step number */}
                  <div className="md:hidden absolute left-5 top-4 -translate-x-1/2 z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 card-hover ml-10 md:ml-0">
                    <div className="text-4xl mb-4 text-blue-500 floating">{step.icon}</div>
                    <h3 className="text-xl font-bold text-blue-700 mb-3">{step.title}</h3>
                    <p className="text-gray-800">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty div for layout on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-700 wavy-underline">
              Fiyatlandırma
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={pricingInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-800 max-w-3xl mx-auto">
              Özel fiyatlandırma politikamız
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Kişiye Özel Fiyatlandırma</h3>
              <p className="text-gray-800 mb-6 text-lg">
                Pusula Deniz Spor Kulübü olarak, her öğrencinin ihtiyaçları, hedefleri ve programı doğrultusunda özel fiyatlandırma politikası uyguluyoruz. Yaş grubu, eğitim süresi, ders sıklığı, bireysel veya grup dersi tercihi gibi faktörlere göre en uygun paketi sizin için hazırlıyoruz.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-lg card-hover">
                  <h4 className="font-bold text-lg mb-2 text-blue-700">Neden Fiyatları Yayınlamıyoruz?</h4>
                  <p className="text-gray-800">Her öğrenci için özel hazırladığımız eğitim programları farklı fiyatlandırma gerektirmektedir. Size en uygun programı ve fiyatı sunabilmek için ihtiyaçlarınızı anlamak istiyoruz.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg card-hover">
                  <h4 className="font-bold text-lg mb-2 text-blue-700">Fiyatlandırma Faktörleri</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Yaş grubu ve deneyim seviyesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Ders sıklığı ve süresi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Bireysel/grup dersi seçeneği</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Paket süresi ve taahhüt</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Link 
                  href="/contact"
                  className="btn-primary shine transition-all hover:-translate-y-1"
                >
                  Fiyat Teklifi Alın
                </Link>
                <Link 
                  href="/faq"
                  className="text-blue-600 hover:text-blue-800 flex items-center group"
                >
                  <span>Sık Sorulan Sorular</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 ocean-gradient text-white relative overflow-hidden">
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Hemen Yüzmeye Başlayın
          </motion.h2>
          <motion.div 
            className="divider divider-light mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          />
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Profesyonel eğitmenlerimiz eşliğinde keyifli bir yüzme deneyimi için hemen kayıt olun.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="btn-primary shine transition-all hover:-translate-y-2"
            >
              Ücretsiz Deneme Dersi
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 