
import React from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, color: 'hover:text-pink-500', url: 'https://www.instagram.com/diamond.center22' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, color: 'hover:text-green-500', url: 'https://wa.me/201000436389' },
    { name: 'TikTok', icon: <FaTiktok />, color: 'hover:text-gray-400', url: 'https://www.tiktok.com/@diamond.dental.centers' },
    { name: 'Facebook', icon: <FaFacebookF />, color: 'hover:text-blue-500', url: 'https://www.facebook.com/profile.php?id=61559482952900&sk=photos' },
  ];

  return (
    <div className="relative min-h-screen w-full flex pt-15 pb-10 flex-col items-center justify-center overflow-hidden  text-white px-4">
      
      {/* 1. الخلفية المتدرجة (Decorative Blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

      {/* 2. المحتوى الرئيسي */}
      <div className="relative z-10 text-center max-w-3xl">
         <img src="/logo.png" className="w-40 md:w-50 mx-auto " alt="" />
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight bg-gradient-to-b from-[#a3844c] to-[#927035] bg-clip-text text-transparent">
          Diamond Dental Centers
        </h1>
        <p className="text-lg  text-gray-300 mb-12 leading-relaxed" dir="rtl">
          نقدم لك تجربة طب أسنان استثنائية تجمع بين الفن والدقة. تواصل معنا عبر منصاتنا الرسمية.
        </p>

        {/* 3. شبكة الروابط (Modern Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`
                flex items-center justify-center gap-3 p-5 
                bg-white/5 backdrop-blur-md border border-white/10 
                rounded-2xl transition-all duration-300 
                hover:bg-white/10 hover:border-white/20 hover:-translate-y-1
                ${link.color}
              `}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-lg font-semibold tracking-wide text-white">{link.name}</span>
            </a>
          ))}
        </div>

        {/* 4. أيقونة إضافية سريعة لأسفل */}
        <div className="mt-10 animate-bounce text-gray-300">
           <p className="text-xs uppercase tracking-[0.3em] mb-2">Scroll to explore</p>
           <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;