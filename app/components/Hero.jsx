// "use client";
// import React from 'react';
// import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebookF, FaEnvelope } from 'react-icons/fa';

// const Hero = () => {
//   const socialLinks = [
//     { name: 'Instagram', icon: <FaInstagram />, color: 'hover:text-pink-500', url: 'https://www.instagram.com/diamond.center22' },
//     { name: 'WhatsApp', icon: <FaWhatsapp />, color: 'hover:text-green-500', url: 'https://wa.me/201009529990' },
//     { name: 'TikTok', icon: <FaTiktok />, color: 'hover:text-gray-400', url: 'https://www.tiktok.com/@diamond.dental.centers' },
//     { name: 'Facebook', icon: <FaFacebookF />, color: 'hover:text-blue-500', url: 'https://www.facebook.com/profile.php?id=61559482952900&sk=photos' },
//   ];

//   return (
//     <div className="relative min-h-screen w-full flex pt-28 pb-10 flex-col items-center justify-center overflow-hidden  text-white px-4">
      
//       {/* 1. الخلفية المتدرجة (Decorative Blobs) */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

//       {/* 2. المحتوى الرئيسي */}
//       <div className="relative z-10 text-center max-w-3xl">
//          <img src="/logo.png" className="w-35 md:w-40 mb-5 mx-auto outline-2 outline-[#c5a059] rounded-lg " alt="" />
//         <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight bg-linear-to-b from-[#a3844c] to-[#927035] bg-clip-text text-transparent">
//           Diamond Dental Centers
//         </h1>
//         <p className="text-lg  text-gray-300 mb-12 leading-relaxed" dir="rtl">
//           نقدم لك تجربة طب أسنان استثنائية تجمع بين الفن والدقة. تواصل معنا عبر منصاتنا الرسمية.
//         </p>

//         {/* 3. شبكة الروابط (Modern Grid) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
//           {socialLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.url}
//               className={`
//                 flex items-center justify-center gap-3 p-5 
//                 bg-white/5 backdrop-blur-md border border-white/10 
//                 rounded-2xl transition-all duration-300 
//                 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1
//                 ${link.color}
//               `}
//             >
//               <span className="text-2xl">{link.icon}</span>
//               <span className="text-lg font-semibold tracking-wide text-white">{link.name}</span>
//             </a>
//           ))}
//         </div>

//         {/* 4. أيقونة إضافية سريعة لأسفل */}
//         <div className="mt-10 animate-bounce text-gray-300">
//            <p className="text-xs uppercase tracking-[0.3em] mb-2">Scroll to explore</p>
//            <div className="w-px h-12 bg-linear-to-b from-gray-500 to-transparent mx-auto"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





"use client";
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebookF } from 'react-icons/fa';
// 1. استيراد motion من Framer Motion
import { motion } from 'framer-motion';
// import Slider from './Slider';

const Hero = () => {
  // تريكة لضمان عمل الأنيميشن في Next.js (Client-side only)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, color: 'hover:text-pink-500', url: 'https://www.instagram.com/diamond.center22' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, color: 'hover:text-green-500', url: 'https://wa.me/201009529990' },
    { name: 'TikTok', icon: <FaTiktok />, color: 'hover:text-gray-400', url: 'https://www.tiktok.com/@diamond.dental.centers' },
    { name: 'Facebook', icon: <FaFacebookF />, color: 'hover:text-blue-500', url: 'https://www.facebook.com/profile.php?id=61559482952900&sk=photos' },
  ];

  if (!mounted) return null; // لا ترندر شيئاً حتى التأكد من المتصفح

  return (
    <div className="relative min-h-screen w-full flex pt-28 flex-col items-center justify-center overflow-hidden text-white px-4">
      
      {/* 1. حركات الخلفية المستمرة (Decorative Blobs) - تم إضافة حركة دائرية وبطئ */}
      <motion.div 
        animate={{ 
          x: [0, 30, -30, 0], // حركة أفقية
          y: [0, -20, 20, 0], // حركة رأسية
          scale: [1, 1.1, 0.9, 1] // تكبير وتصغير
        }}
        transition={{ 
          duration: 15, // مدة الدورة (بطيئة جداً)
          repeat: Infinity, // تكرار لا نهائي
          ease: "easeInOut" // حركة ناعمة
        }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 30, 0], // عكس الحركة الأفقية
          y: [0, 20, -20, 0], // عكس الحركة الرأسية
          scale: [1.1, 1, 1.1, 1] // عكس التكبير
        }}
        transition={{ 
          duration: 18, // مدة مختلفة عشان ميتحركوش مع بعض
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" 
      />

      {/* 2. المحتوى الرئيسي */}
      <div className="relative z-10 text-center max-w-3xl">
        
        {/* اللوجو بحركة عائمة مستمرة (Floating) */}
        <motion.div
          animate={{ y: [0, -10, 0] }} // يطلع وينزل 10px
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/logo.png" className="w-35 md:w-40 mb-5 mx-auto outline-2 outline-[#c5a059] rounded-lg shadow-2xl shadow-[#c5a059]/10" alt="Logo" />
        </motion.div>

        {/* العنوان الرئيسي بحركة تدرج لوني مستمر */}
        <motion.h1 
          animate={{ 
            backgroundImage: [
              "linear-gradient(to bottom, #a3844c, #927035)",
              "linear-gradient(to bottom, #f5e0b5, #c5a059)",
              "linear-gradient(to bottom, #a3844c, #927035)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent"
        >
          Diamond Dental Centers
        </motion.h1>
          {/* <Slider/> */}
        {/* النص الوصفي بحركة نبض خفيفة للشفافية */}
        <motion.p 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg text-gray-300 mb-12 leading-relaxed" 
          dir="rtl"
        >
          نقدم لك تجربة طب أسنان استثنائية تجمع بين الفن والدقة. تواصل معنا عبر منصاتنا الرسمية.
        </motion.p>

        {/* 3. شبكة الروابط (Modern Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
          {socialLinks.map((link, index) => (
            // كل رابط تم تحويله لـ motion.a
            <motion.a
              key={index}
              href={link.url}
              
              // حركات تفاعلية (Hover) كما هي، مع إضافة حركة نبض خلفية مستمرة
              whileHover={{ 
                scale: 1.03, 
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 10px 30px -10px rgba(197, 160, 89, 0.1)" // ظل دهبي خفيف جداً
              }}
              whileTap={{ scale: 0.97 }}
              
              className={`
                flex items-center justify-center gap-3 p-5 
                bg-white/5 backdrop-blur-md border-2 border-[#c5a059]
                rounded-2xl transition-all duration-300 
                 relative overflow-hidden
              `}
            >
              {/* تأثير نبض خلفي مستمر داخل الزر (شغل فنادق) */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.05, 0.1, 0.05] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="absolute inset-0 bg-[#c5a059] rounded-2xl pointer-events-none"
              />

              <span className="text-2xl relative z-10">{link.icon}</span>
              <span className="text-lg font-semibold tracking-wide text-white relative z-10">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* 4. أيقونة السكرول (Bouncing المستمر الأصلي) */}
        <div className="mt-10 text-gray-300 relative">
          <p className="text-xs uppercase tracking-[0.3em] mb-2">Scroll to explore</p>
          
          {/* تم استخدام motion لعمل حركة Bouncing أكثر سلاسة */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-linear-to-b from-gray-500 to-transparent mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;