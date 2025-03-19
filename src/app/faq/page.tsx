'use client';

import { useState, useEffect } from 'react';
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

type Category = 'all' | 'general' | 'courses' | 'membership' | 'facilities';

interface FAQData {
  id: number;
  question: string;
  answer: string;
  category: Category;
}

const faqCategories = [
  {
    title: "Genel Sorular",
    items: [
      {
        question: "Pusula Deniz Spor Kulübü nerede bulunuyor?",
        answer: "Kulübümüz, İzmir'in Karşıyaka ilçesinde, denize kolay erişimi olan modern tesisimizde hizmet vermektedir. Tam adresimiz Deniz Caddesi No: A123, Karşıyaka, İzmir."
      },
      {
        question: "Hangi yaş gruplarına hizmet veriyorsunuz?",
        answer: "Kulübümüz, 4 yaşından itibaren çocuklar, gençler ve her yaştan yetişkinler için uygun programlar sunmaktadır. Yaş gruplarına özel olarak tasarlanmış derslerimiz bulunmaktadır."
      },
      {
        question: "Tesislerinizde ne tür imkanlar bulunuyor?",
        answer: "Tesislerimizde yarı olimpik yüzme havuzu, çocuk havuzu, soyunma odaları, duşlar, kafeterya ve dinlenme alanları mevcuttur. Tüm tesisimiz modern ekipmanlarla donatılmıştır."
      },
      {
        question: "Üyelik sisteminiz nasıl işliyor?",
        answer: "Kulübümüzde aylık, 3 aylık, 6 aylık ve yıllık üyelik paketlerimiz bulunmaktadır. Üyeliğiniz süresince tüm tesislerimizden ve uygun olan derslerden faydalanabilirsiniz."
      }
    ]
  },
  {
    title: "Dersler Hakkında",
    items: [
      {
        question: "Hangi tür yüzme dersleri sunuyorsunuz?",
        answer: "Temel yüzme, ileri yüzme, yarışma hazırlık, özel dersler, yetişkin yüzme, bebek ve ebeveyn yüzme dersleri gibi çeşitli programlar sunmaktayız."
      },
      {
        question: "Derslerin süresi ve sıklığı nedir?",
        answer: "Standart derslerimiz 45-60 dakika sürmektedir. Seviye ve programa bağlı olarak haftada 1, 2 veya 3 gün olarak planlanabilir."
      },
      {
        question: "Eğitmenlerinizin deneyimi nedir?",
        answer: "Tüm eğitmenlerimiz, alanında uzman, sertifikalı ve deneyimli profesyonellerdir. Birçoğu eski milli yüzücüler ve lisanslı antrenörlerden oluşmaktadır."
      },
      {
        question: "Bir derste kaç öğrenci oluyor?",
        answer: "Grup derslerinde maksimum 6-8 öğrenci bulunmaktadır. Özel dersler bire bir yapılmaktadır. Küçük gruplar halinde eğitim, her öğrenciye yeterli ilgiyi gösterebilmemizi sağlar."
      }
    ]
  },
  {
    title: "Kayıt ve Ücretler",
    items: [
      {
        question: "Deneme dersi imkanınız var mı?",
        answer: "Evet, kulübümüzde bir kereye mahsus ücretsiz deneme dersi imkanımız bulunmaktadır. Bu sayede derslerimizin kalitesini ve tesislerimizi deneyimleyebilirsiniz."
      },
      {
        question: "Kayıt için hangi belgeler gerekli?",
        answer: "Kayıt için kimlik fotokopisi, sağlık raporu (yüzmeye engel bir durumunuz olmadığına dair) ve bir adet vesikalık fotoğraf talep edilmektedir."
      },
      {
        question: "Ödeme seçenekleriniz nelerdir?",
        answer: "Nakit, kredi kartı ve havale/EFT ile ödeme yapabilirsiniz. Kredi kartına taksit imkanımız da bulunmaktadır. Fiyatlarımız kişiselleştirilmiş eğitim programına göre değişmektedir, detaylı bilgi için lütfen bizimle iletişime geçiniz."
      },
      {
        question: "Fiyatlarınız hakkında bilgi alabilir miyim?",
        answer: "Fiyatlarımız; yaş grubu, seviye, ders sıklığı, bireysel veya grup dersi tercihi gibi faktörlere göre değişiklik göstermektedir. Her öğrencimiz için kişiselleştirilmiş programlar hazırladığımızdan, detaylı bilgi ve size özel fiyat teklifi için lütfen bizimle iletişime geçin."
      },
      {
        question: "İptal ve iade politikanız nedir?",
        answer: "Dersler 24 saat öncesinden iptal edilebilir ve telafi dersi hakkı kazanılır. Sağlık sorunları için doktor raporu ile daha esnek iade politikamız mevcuttur. Detaylar için üyelik sözleşmemize göz atabilirsiniz."
      }
    ]
  },
  {
    title: "Güvenlik ve Sağlık",
    items: [
      {
        question: "Havuzunuzun hijyen standartları nelerdir?",
        answer: "Havuzlarımız düzenli olarak temizlenmekte ve su kalitesi günlük kontrol edilmektedir. Uluslararası standartlarda filtreleme ve dezenfeksiyon sistemlerimiz mevcuttur."
      },
      {
        question: "Acil durum protokolleriniz nelerdir?",
        answer: "Tesisimizde acil durum planları mevcuttur. Tüm personelimiz ilk yardım konusunda eğitimlidir. Ayrıca tesiste her zaman bir sağlık personeli bulunmaktadır."
      },
      {
        question: "Çocuğumun yüzme sırasında güvenliği nasıl sağlanıyor?",
        answer: "Güvenlik bizim en önemli önceliğimizdir. Eğitmenlerimiz, güvenlik prosedürleri konusunda düzenli eğitim almaktadır. Ayrıca tüm havuz alanları gözlem altında tutulmaktadır."
      },
      {
        question: "Sağlık sorunları olan bireyler için uyarlamalar yapıyor musunuz?",
        answer: "Evet, özel sağlık durumlarına göre programlarımızı kişiselleştiriyoruz. Fiziksel engelli bireyler, kronik rahatsızlığı olanlar veya özel ihtiyaçları olan kişiler için uyarlanmış derslerimiz bulunmaktadır."
      }
    ]
  }
];

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("Genel Sorular");

  const toggleFAQ = (question: string) => {
    setOpenItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  const [contentRef, contentInView] = useInView({
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
            Sıkça Sorulan Sorular
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
            Pusula Deniz Spor Kulübü hakkında merak edilenler
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

      {/* FAQ Content Section */}
      <section ref={contentRef} className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Kategori Seçimi */}
            <div className="bg-gray-50 p-6 border-b sticky top-0 z-20 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(category.title)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors btn-like ${
                      activeCategory === category.title
                        ? 'bg-blue-600 text-white shine'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ Öğeleri */}
            <div className="p-6">
              {faqCategories
                .filter(category => category.title === activeCategory)
                .map((category) => (
                  <div key={category.title}>
                    <motion.h2 
                      variants={fadeIn}
                      className="text-2xl font-bold mb-6 text-blue-600 wavy-underline"
                    >
                      {category.title}
                    </motion.h2>
                    
                    <div className="space-y-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeIn}
                          className={`border rounded-lg overflow-hidden transition-all ${
                            openItems[item.question] ? 'shadow-md' : ''
                          }`}
                        >
                          <button
                            onClick={() => toggleFAQ(item.question)}
                            className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-800">{item.question}</span>
                            <span className="text-blue-600">
                              {openItems[item.question] ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                              )}
                            </span>
                          </button>
                          
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openItems[item.question] ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            <div className="p-4 bg-gray-50 border-t">
                              <p className="text-gray-700">{item.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
            Sorunuzu Bulamadınız mı?
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
            Aradığınız cevabı bulamadıysanız, bize doğrudan ulaşmaktan çekinmeyin. Size yardımcı olmaktan memnuniyet duyarız.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="btn-primary shine transition-all hover:-translate-y-2"
            >
              Bize Ulaşın
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 