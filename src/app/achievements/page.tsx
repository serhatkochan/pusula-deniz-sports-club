'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// Örnek başarı verileri
const achievements = [
  {
    id: 1,
    title: "Ulusal Yüzme Şampiyonası 2023",
    description: "Serbest stil 100m kategorisinde altın madalya",
    image: "/images/competition.jpg",
    athlete: "Ayşe Yılmaz",
    date: "Ağustos 2023"
  },
  {
    id: 2,
    title: "Akdeniz Kupası 2023",
    description: "Takım olarak gümüş madalya",
    image: "/images/adult-fitness.jpg",
    athlete: "Pusula Yüzme Takımı",
    date: "Temmuz 2023"
  },
  {
    id: 3,
    title: "Gençler Dalış Turnuvası",
    description: "En iyi teknik dalış ödülü",
    image: "/images/facility-pool.jpg",
    athlete: "Mehmet Demir",
    date: "Haziran 2023"
  },
  {
    id: 4,
    title: "İstanbul Su Sporları Festivali",
    description: "Senkronize yüzme kategorisinde birincilik",
    image: "/images/group-lesson.jpg",
    athlete: "Zeynep Kaya & Esra Şahin",
    date: "Mayıs 2023"
  },
  {
    id: 5,
    title: "Kulaçlar Yarışması 2022",
    description: "Dayanıklılık dalında bronz madalya",
    image: "/images/about-hero.jpg",
    athlete: "Kerem Yıldız",
    date: "Aralık 2022"
  },
  {
    id: 6,
    title: "Kıyı Ege Yüzme Ligi",
    description: "Sezon şampiyonluğu",
    image: "/images/facility-children-pool.jpg",
    athlete: "Pusula Yüzme Takımı",
    date: "Ekim 2022"
  },
  {
    id: 7,
    title: "Uluslararası Gençler Yüzme Kupası",
    description: "Kelebek stil 200m gümüş madalya",
    image: "/images/facility-fitness.jpg",
    athlete: "Ali Kaya",
    date: "Eylül 2022"
  },
  {
    id: 8,
    title: "Türkiye Dalış Şampiyonası",
    description: "Serbest dalış kategorisinde altın madalya",
    image: "/images/hero-bg.jpg",
    athlete: "Deniz Yıldırım",
    date: "Ağustos 2022"
  }
];

export default function AchievementsPage() {
  const [achievementsRef, achievementsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [medalssRef, medalsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [galleryRef, galleryInView] = useInView({
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
            Başarılarımız
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
            Sporcularımızın azmi ve çalışkanlığı ile elde ettiğimiz gurur kaynaklarımız
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
      
      {/* Madalyalar Özeti */}
      <section ref={medalssRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={medalsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-700 wavy-underline">
              Madalya Koleksiyonumuz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={medalsInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-800 max-w-3xl mx-auto">
              Sporcularımızın yıllar içinde kazandığı başarılar
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🥇</div>
              <div className="text-3xl font-bold text-amber-500">12</div>
              <div className="text-gray-600">Altın Madalya</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🥈</div>
              <div className="text-3xl font-bold text-gray-400">18</div>
              <div className="text-gray-600">Gümüş Madalya</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🥉</div>
              <div className="text-3xl font-bold text-amber-700">24</div>
              <div className="text-gray-600">Bronz Madalya</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🏆</div>
              <div className="text-3xl font-bold text-blue-600">7</div>
              <div className="text-gray-600">Kupa</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Başarılar Galerisi */}
      <section ref={galleryRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Dekoratif arka plan deseni */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-300 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-700 wavy-underline">
              Başarı Galerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={galleryInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-800 max-w-3xl mx-auto">
              Sporcularımızın elde ettiği başarılar ve anlar
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement) => (
              <motion.div 
                key={achievement.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-500 card-hover flex flex-col h-[420px]"
              >
                <div className="h-56 overflow-hidden img-overlay">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full z-20">
                    {achievement.date}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{achievement.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/achievements/${achievement.id}`} 
                      className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors group"
                    >
                      <span className="mr-1">Detaylar</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Daha Fazla Yükleniyor */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button className="btn-primary shine transition-all hover:-translate-y-2 inline-flex items-center">
              <span className="mr-2">Daha Fazla Göster</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
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
            Siz de Başarı Hikayemizin Bir Parçası Olun
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
            Profesyonel eğitmenlerimiz ve modern tesislerimiz ile sizi de başarıya taşımak için sabırsızlanıyoruz!
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
              Bize Katılın
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 