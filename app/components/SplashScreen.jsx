"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const title = "DIAMOND_ DENTAL_ CENTERS...";

  // إعدادات انيميشن الحروف
  const containerVars = {
    before: {},
    after: { transition: { staggerChildren: 0.05 } }
  };

  const letterVars = {
    before: { opacity: 0, y: 20, filter: "blur(10px)" },
    after: { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#00090f] text-[#c5a059]"
        >
         
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 outline-2 outline-[#c5a059] rounded-lg"
          >
            
            <img 
              src="/logo.png" 
              alt="Diamond Dental" 
              className="w-32 h-32 object-cover "
            />
          </motion.div>

          {/* اسم العيادة - حروف بتتجمع */}
          <motion.h1 
            variants={containerVars}
            initial="before"
            animate="after"
            className="text-2xl md:text-5xl font-bold px-2 tracking-[0.2em] text-[#c5a059] mb-4 text-center"
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVars} className="inline-block">
                {char === "" ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>



          {/* خط لامع تحت الكلام */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;