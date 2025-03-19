'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

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

export default function Team() {
  const [instructorsRef, instructorsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [managementRef, managementInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [studentsRef, studentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
            Ekibimiz
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
            Deneyimli eğitmenlerimiz ve profesyonel yönetim kadromuzla tanışın
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

      {/* Instructors Section */}
      <section ref={instructorsRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={instructorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Eğitmenlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={instructorsInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Deneyimli ve lisanslı eğitmenlerimizle tanışın
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={instructorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Ahmet Yılmaz",
                title: "Baş Antrenör",
                bio: "Milli yüzücü ve 15 yıllık eğitmenlik deneyimine sahip olan Ahmet Bey, çocuk ve yetişkinlere yüzme öğretme konusunda uzmanlaşmıştır.",
                image: "/images/instructor-1.jpg",
                specialties: ["Yetişkin Yüzme", "Yarışma Hazırlık"]
              },
              {
                name: "Zeynep Kaya",
                title: "Çocuk Yüzme Uzmanı",
                bio: "10 yıldır çocuklara yüzme öğreten Zeynep Hanım, oyunlarla zenginleştirilmiş eğitim metoduyla minik yüzücülerin favorisi.",
                image: "/images/instructor-2.jpg",
                specialties: ["Çocuk Yüzme", "Su Oyunları"]
              },
              {
                name: "Mehmet Demir",
                title: "Performans Antrenörü",
                bio: "Eski olimpik yüzücü olan Mehmet Bey, yarışma hazırlık ve ileri seviye yüzme teknikleri konusunda uzmanlaşmıştır.",
                image: "/images/instructor-3.jpg",
                specialties: ["Yarışma Antrenmanı", "İleri Teknikler"]
              },
              {
                name: "Seda Arslan",
                title: "Su Terapisti",
                bio: "Fizyoterapi ve yüzme eğitmenliği sertifikalarına sahip Seda Hanım, rehabilitasyon amaçlı su terapisi konusunda deneyimlidir.",
                image: "/images/instructor-4.jpg",
                specialties: ["Su Terapisi", "Rehabilitasyon"]
              },
              {
                name: "Can Öztürk",
                title: "Yüzme Eğitmeni",
                bio: "5 yıllık eğitmenlik deneyimiyle Can Bey, özellikle su korkusu olan yetişkinlere yüzme öğretme konusunda uzmanlaşmıştır.",
                image: "/images/instructor-5.jpg",
                specialties: ["Su Korkusu Aşma", "Yetişkin Eğitimi"]
              },
              {
                name: "Deniz Yıldız",
                title: "Yüzme Eğitmeni",
                bio: "Çocuk gelişimi ve yüzme eğitmenliği sertifikalarına sahip Deniz Hanım, özellikle okul öncesi yaş grubuyla çalışmaktadır.",
                image: "/images/instructor-6.jpg",
                specialties: ["Okul Öncesi Yüzme", "Çocuk Gelişimi"]
              }
            ].map((instructor, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 card-hover"
              >
                <div className="h-72 overflow-hidden img-overlay relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1 text-shadow-sm">{instructor.name}</h3>
                    <p className="text-blue-200">{instructor.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{instructor.bio}</p>
                  <div>
                    <h4 className="text-sm text-gray-500 mb-2">Uzmanlık Alanları:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Section */}
      <section ref={managementRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Dekoratif arka plan deseni */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-300 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={managementInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Yönetim Kadromuz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={managementInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Kulübümüzün profesyonel yönetim ekibi
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={managementInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {[
              {
                name: "Mustafa Öztürk",
                title: "Kulüp Başkanı & Kurucu",
                bio: "Eski milli yüzücü Mustafa Öztürk, 2010 yılında Pusula Deniz Spor Kulübünü kurmuştur. 25 yıllık spor kariyeri ve 15 yıllık eğitmenlik tecrübesiyle, kulübün vizyonu ve kalite standartlarını belirlemektedir.",
                image: "/images/manager-1.jpg",
                contact: {
                  email: "mustafa@pusuladenizspor.com",
                  phone: "+90 (555) 123 4567"
                }
              },
              {
                name: "Ayşe Kaya",
                title: "Operasyon Müdürü",
                bio: "Spor yönetimi alanında 10 yıllık deneyime sahip olan Ayşe Hanım, kulübün günlük operasyonlarından ve eğitim programlarının koordinasyonundan sorumludur.",
                image: "/images/manager-2.jpg",
                contact: {
                  email: "ayse@pusuladenizspor.com",
                  phone: "+90 (555) 234 5678"
                }
              }
            ].map((manager, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-xl shadow-md card-hover"
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden shadow-md img-overlay shine">
                    <img 
                      src={manager.image} 
                      alt={manager.name} 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{manager.name}</h3>
                  <p className="text-gray-500 mb-4">{manager.title}</p>
                  <p className="text-gray-700 mb-6">{manager.bio}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <a href={`mailto:${manager.contact.email}`} className="hover:text-blue-600 transition-colors">
                        {manager.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <a href={`tel:${manager.contact.phone.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">
                        {manager.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Students Section */}
      <section ref={studentsRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={studentsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Başarılı Öğrencilerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={studentsInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Kulübümüzden yetişen başarılı sporcularımız
            </motion.p>
          </motion.div>

          <div className="relative mb-16 overflow-hidden rounded-xl shadow-xl">
            <div className="absolute inset-0 opacity-15 z-0 bg-blue-600"></div>
            <div className="relative z-10 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={studentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3">
                  <div className="rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto w-48 h-48 md:w-64 md:h-64 img-overlay shine">
                    <img 
                      src="/images/student-highlight.jpg" 
                      alt="Ece Yılmaz" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Ece Yılmaz</h3>
                  <p className="text-gray-600 mb-6 text-lg">Ulusal Yüzme Şampiyonası - 200m Serbest Yüzme Altın Madalya</p>
                  <div className="text-gray-700 mt-4 italic">
                    &ldquo;Su, hayatın ta kendisidir. Öğrencilerime sadece yüzmeyi değil, suyla bir bütün olmayı öğretmeye çalışıyorum. Bir öğrencinin suda ilk kez güvenle süzüldüğünü görmek, benim için en büyük mutluluk.&rdquo;
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <div className="text-yellow-400 flex">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate={studentsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Ali Can",
                title: "İl Birincisi - 100m Kelebek",
                quote: "Pusula'da öğrendiğim teknikler sayesinde en zorlu stillerden biri olan kelebeği başarıyla yapabiliyorum.",
                image: "/images/student-1.jpg"
              },
              {
                name: "Zehra Demir",
                title: "Ulusal Yüzme Takımı Sporcusu",
                quote: "Kulübün disiplinli eğitim yaklaşımı, beni ulusal takıma taşıdı. Burası benim ikinci ailem.",
                image: "/images/student-2.jpg"
              },
              {
                name: "Burak Şahin",
                title: "Açık Su Yüzme Maratonu Tamamlayıcısı",
                quote: "Dayanıklılık ve doğru teknik eğitimi sayesinde Boğaz'ı yüzerek geçebildim.",
                image: "/images/student-3.jpg"
              }
            ].map((student, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="h-56 overflow-hidden img-overlay">
                  <img 
                    src={student.image} 
                    alt={student.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">{student.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{student.title}</p>
                  <p className="text-gray-800 italic font-semibold">
                    &ldquo;Hayallerini takip et, iyi bir yüzücü olmak için geç kalmış değilsin!&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
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
            Ekibimize Katılın
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
            Deneyimli bir eğitmen misiniz? Pusula Deniz Spor Kulübü ailesine katılmak için bizimle iletişime geçin.
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
              Başvuru Yapın
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 