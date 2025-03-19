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

export default function About() {
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [facilityRef, facilityInView] = useInView({
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
            Hakkımızda
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
            Profesyonel ekibimiz ve modern tesislerimizle yüzme tutkunlarına hizmet veriyoruz
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

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-blue-600 wavy-underline">Hikayemiz</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pusula Deniz Spor Kulübü, 2010 yılında eski milli yüzücü Mustafa Öztürk tarafından İzmir'de kuruldu. Başlangıçta küçük bir tesis ve sınırlı imkanlarla yola çıkan kulübümüz, zaman içinde büyüyerek İzmir'in en prestijli yüzme kulüplerinden biri haline geldi.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                İlk günden bu yana amacımız, her yaştan insana yüzme sevgisini aşılamak ve profesyonel sporculara en iyi eğitimi vermektir. 10 yılı aşkın deneyimimizle, binlerce öğrenciye yüzme öğrettik ve onlarca milli sporcu yetiştirdik.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bugün geldiğimiz noktada, modern tesislerimiz, uzman eğitmen kadromuz ve özel eğitim programlarımızla hizmet vermeye devam ediyoruz. Pusula Deniz Spor Kulübü olarak en büyük gururumuz, öğrencilerimizin başarıları ve yüzmeye karşı geliştirdikleri tutkudur.
              </p>
              
              <div className="mt-10">
                <motion.div
                  className="grid grid-cols-3 gap-4"
                  initial="hidden"
                  animate={storyInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all shadow-sm card-hover">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">10+</div>
                    <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all shadow-sm card-hover">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">5,000+</div>
                    <div className="text-sm text-gray-600">Öğrenci</div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all shadow-sm card-hover">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">30+</div>
                    <div className="text-sm text-gray-600">Uzman Eğitmen</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn} 
              className="order-first lg:order-last h-80 md:h-96 rounded-xl overflow-hidden shadow-xl img-overlay shine"
            >
              <img 
                src="/images/about-hero.jpg" 
                alt="Pusula Deniz Spor Kulübü" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Dekoratif arka plan deseni */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-300 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Değerlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={valuesInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Kulübümüzü başarıya taşıyan temel ilkelerimiz
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Kalite",
                description: "En yüksek standartlarda eğitim ve tesisler sunarak, öğrencilerimizin potansiyellerini maksimum seviyede kullanmalarına olanak tanıyoruz.",
                icon: "✨"
              },
              {
                title: "Güvenlik",
                description: "Öğrencilerimizin fiziksel ve duygusal güvenliği bizim için her zaman önceliklidir. Tüm eğitmenlerimiz ilk yardım ve güvenlik konusunda düzenli eğitim alır.",
                icon: "🛡️"
              },
              {
                title: "Kişisel Gelişim",
                description: "Sadece yüzme becerileri değil, aynı zamanda özgüven, disiplin ve takım ruhu gibi değerleri de öğrencilerimize kazandırmaya çalışıyoruz.",
                icon: "🌱"
              },
              {
                title: "Kapsayıcılık",
                description: "Her yaştan ve seviyeden öğrenciye kapımız açıktır. Herkesin yüzme öğrenme ve geliştirme hakkı olduğuna inanıyoruz.",
                icon: "🤝"
              },
              {
                title: "Yenilikçilik",
                description: "Eğitim metodlarımızı ve tesislerimizi sürekli güncelleyerek, en modern ve etkili yüzme eğitimini sunuyoruz.",
                icon: "💡"
              },
              {
                title: "Tutku",
                description: "Yüzmeye olan tutkumuz, kulübümüzün her köşesine yansır. Bu tutkuyu öğrencilerimize de aktarmak için çalışıyoruz.",
                icon: "❤️"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 card-hover"
              >
                <div className="text-4xl mb-4 text-blue-500 floating">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section ref={facilityRef} className="py-20 px-4 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={facilityInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Tesislerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={facilityInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Modern ve tam donanımlı tesislerimiz
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={facilityInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Yarı Olimpik Yüzme Havuzu",
                description: "25 metre uzunluğunda, 6 kulvarlı, ısıtmalı kapalı havuzumuz profesyonel yüzme eğitimi için idealdir.",
                image: "/images/facility-pool.jpg"
              },
              {
                title: "Çocuk Havuzu",
                description: "Derinliği ayarlanabilir, ısıtmalı çocuk havuzumuz, minik öğrencilerimizin güvenli bir ortamda yüzme öğrenmesi için tasarlanmıştır.",
                image: "/images/facility-children-pool.jpg"
              },
              {
                title: "Fitness Salonu",
                description: "Yüzücülerimizin kara antrenmanı yapabilmeleri için modern ekipmanlarla donatılmış fitness salonumuz bulunmaktadır.",
                image: "/images/facility-fitness.jpg"
              },
              {
                title: "Soyunma Odaları",
                description: "Kadın ve erkek sporcularımız için ayrı, duş ve sauna imkanı sunan geniş soyunma odalarımız mevcuttur.",
                image: "/images/facility-locker.jpg"
              },
              {
                title: "Kafeterya",
                description: "Öğrencilerimizin ve velilerimizin dinlenebileceği, sağlıklı atıştırmalıklar bulabileceği kafeteryamız hizmet vermektedir.",
                image: "/images/facility-cafe.jpg"
              },
              {
                title: "Toplantı Odası",
                description: "Eğitmenlerimizin ve sporcularımızın teknik analiz yapabilecekleri, video izleyebilecekleri toplantı odamız bulunmaktadır.",
                image: "/images/facility-meeting.jpg"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-500 card-hover"
              >
                <div className="h-56 overflow-hidden img-overlay">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 ocean-gradient text-white relative overflow-hidden water-wave">
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
            Tesislerimizi Ziyaret Edin
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
            Kulübümüzü daha yakından tanımak için sizi tesislerimizi ziyaret etmeye davet ediyoruz.
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
              Randevu Alın
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 