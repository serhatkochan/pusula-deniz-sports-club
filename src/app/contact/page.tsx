'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form gönderim fonksiyonu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tüm zorunlu alanların doldurulduğunu kontrol et
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormError('Lütfen tüm zorunlu alanları doldurun');
      return;
    }
    
    // Telefon numarası doğrulama
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      setFormError('Lütfen geçerli bir telefon numarası girin (en az 10 hane)');
      return;
    }
    
    // Form gönderimini başlat
    setIsSubmitting(true);
    setFormError('');
    
    // Form gönderimini simüle et
    setTimeout(() => {
      // Başarılı gönderim
      setIsSubmitted(true);
      
      // Formu sıfırla
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

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
            İletişim
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
            Sorularınız, kayıt işlemleri ve daha fazlası için bizimle iletişime geçin
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

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-6 text-blue-700 wavy-underline">
                Bize Ulaşın
              </motion.h2>
              <motion.div 
                className="divider mx-auto mb-6"
                initial={{ opacity: 0, width: 0 }}
                animate={contactInView ? { opacity: 1, width: 60 } : {}}
                transition={{ duration: 0.8 }}
              />
              
              {isSubmitted ? (
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-emerald-400 p-8 rounded-2xl text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Teşekkürler!</h3>
                  <p className="mb-4">
                    Mesajınız başarıyla alındı. {formData.phone && formData.email ? 
                      `Size ${formData.phone} numaralı telefonunuzdan veya ${formData.email} adresinizden ulaşacağız.` : 
                      'En kısa sürede sizinle iletişime geçeceğiz.'}
                  </p>
                  <IoMdCheckmarkCircleOutline className="text-6xl mx-auto text-white" />
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} variants={fadeIn} className="space-y-6">
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 mb-4">
                      {formError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Adınız Soyadınız <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 touch-manipulation"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-posta Adresiniz <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 touch-manipulation"
                        placeholder="E-posta adresiniz"
                        inputMode="email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefon Numaranız <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9\s\(\)\-\+]+"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 touch-manipulation"
                        placeholder="Örn: 0555 123 45 67"
                        inputMode="tel"
                        title="Lütfen geçerli bir telefon numarası girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 touch-manipulation"
                      >
                        <option value="">Seçiniz</option>
                        <option value="çocuk-yüzme">Çocuk Yüzme Dersleri</option>
                        <option value="yetişkin-yüzme">Yetişkin Yüzme Dersleri</option>
                        <option value="özel-dersler">Özel Dersler</option>
                        <option value="yarışma-hazırlık">Yarışma Hazırlık</option>
                        <option value="yaz-kampı">Yaz Kampı</option>
                        <option value="diğer">Diğer</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Mesajınız <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800 touch-manipulation"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary shine transition-all ${!isSubmitting ? 'hover:-translate-y-2' : ''} w-full sm:w-auto flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gönderiliyor...
                        </span>
                      ) : (
                        <>
                          <span>Mesajı Gönder</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500 text-center sm:text-right">
                      <span className="text-red-500">*</span> ile işaretli alanlar zorunludur
                    </p>
                  </div>
                </motion.form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-blue-50 relative overflow-hidden rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10 p-8">
                <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-6 text-blue-700 wavy-underline">
                  İletişim Bilgilerimiz
                </motion.h2>
                <motion.div 
                  className="divider mb-8"
                  initial={{ opacity: 0, width: 0 }}
                  animate={contactInView ? { opacity: 1, width: 60 } : {}}
                  transition={{ duration: 0.8 }}
                />
                
                <motion.div variants={fadeIn} className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-4 icon-btn flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Adres</h3>
                      <p className="text-gray-600">Deniz Caddesi No: 123, Karşıyaka</p>
                      <p className="text-gray-600">35620 İzmir, Türkiye</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 icon-btn flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefon</h3>
                      <p className="text-gray-600">+90 (232) 456 78 90</p>
                      <p className="text-gray-600">+90 (532) 123 45 67 (GSM)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 icon-btn flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">E-posta</h3>
                      <p className="text-gray-600">info@pusuladenizspor.com</p>
                      <p className="text-gray-600">iletisim@pusuladenizspor.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 icon-btn flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Çalışma Saatleri</h3>
                      <p className="text-gray-600">Hafta içi: 08:00 - 21:00</p>
                      <p className="text-gray-600">Hafta sonu: 09:00 - 19:00</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Sosyal Medya</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="icon-btn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12"></path>
                        </svg>
                      </a>
                      <a href="#" className="icon-btn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                      </a>
                      <a href="#" className="icon-btn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="icon-btn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">Bize Ulaşın</h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Aşağıdaki haritayı kullanarak bize kolaylıkla ulaşabilirsiniz
            </p>
          </div>
          
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg card-hover">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12568.092171500875!2d27.079032673535166!3d38.45848329783305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e76a5882e9%3A0x817bf6cab3e97935!2zS2FyxZ_EsXlha2EvxLB6bWly!5e0!3m2!1str!2str!4v1656325855121!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pusula Deniz Spor Kulübü Konum"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
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
            Sık Sorulan Sorular
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
            Kulübümüz hakkında merak ettiğiniz soruların cevaplarını bulabileceğiniz SSS sayfamıza göz atın.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="/faq"
              className="btn-primary shine transition-all hover:-translate-y-2"
            >
              SSS Sayfası
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 