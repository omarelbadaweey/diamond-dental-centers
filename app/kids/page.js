
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Back from '../components/Back';

const ComingSoon = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden font-sans bg-linear-to-tr from-[#E2F6F1] via-[#FFF3F8] to-[#EAE3F7]">
      <div className='my-2'>
        <Back/>
      </div>
      {/* عناصر جمالية متناثرة في الخلفية مستوحاة من النجوم المحيطة باللوجو */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#FFD166] rounded-full blur-sm opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-[#A2D2FF] rounded-full blur-md opacity-50 animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FFAFCC] rotate-45 transform opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center justify-center">
        
        {/* منطقة اللوجو مع حركة دخول مرنة */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 p-4 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(220,180,200,0.2)] border border-white/60 max-w-70 md:max-w-[320px]"
        >
          {/* استبدل المسار هنا بمسار صورتك في مجلد public */}
          <img 
            src="/img/logo2.jpeg" 
            alt="Diamond Dental Centers Logo" 
            className="w-full h-auto object-contain rounded-4xl"
          />
        </motion.div>

        {/* النص الرئيسي (قريباً) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          {/* كلمة SOON بالتدرج اللوني الخاص بالحروف في اللوجو */}
          <h1 className="text-6xl md:text-8xl font-black tracking-widest uppercase bg-linear-to-r from-[#7FB3D5] via-[#A569BD] to-[#F1948A] bg-clip-text text-transparent filter drop-shadow-sm font-mono">
            Soon
          </h1>
          
          <h2 className="text-[#9A7B56] text-xl md:text-2xl font-bold tracking-wide">
            DIAMOND DENTAL CENTERS
          </h2>
          
          <div className="h-0.75 w-20 bg-linear-to-r from-[#C1A169] to-[#EAD5A7] mx-auto rounded-full my-4"></div>
          
          <p className="text-gray-500 text-base md:text-lg max-w-sm mx-auto font-medium">
            نعمل على تجهيز تجربة رقمية فريدة تليق بابتسامتكم. انتظرونا قريباً!
          </p>
        </motion.div>


      </div>
    </div>
  );
};

export default ComingSoon;