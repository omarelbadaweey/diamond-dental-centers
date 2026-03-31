"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, QrCode, Banknote, Smartphone } from 'lucide-react';

const Payment = () => {
  const [method, setMethod] = useState('cash'); // 'cash' or 'instapay'

  return (
    <section className=" pb-10 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* العناوين */}
        <div className="text-center mb-6">
          <h2 className="text-[#c5a059] text-4xl font-serif mb-3">طرق الدفع</h2>
          <div className="h-1 w-24 bg-[#c5a059] mx-auto rounded-full shadow-[0_0_15px_rgba(197,160,89,0.4)]"></div>
          <p className="text-gray-400 mt-4">اختر طريقة الدفع المناسبة لك </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* الاختيارات (Toggle Switch) */}
          <div className="flex bg-[#151515] p-1 rounded-2xl border border-[#c5a059]/20 mb-8 relative">
            <button
              onClick={() => setMethod('cash')}
              className={`flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl z-10 transition-colors duration-300 ${
                method === 'cash' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <Smartphone size={20} />
              <span>فودافون كاش </span>
            </button>
            <button
              onClick={() => setMethod('instapay')}
              className={`flex-1 flex cursor-pointer items-center justify-center gap-2 py-3 rounded-xl z-10 transition-colors duration-300 ${
                method === 'instapay' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <Smartphone size={20} />
              <span>إنستا باي</span>
            </button>

            {/* خلفية الزر النشط المتحركة */}
            <motion.div
              className="absolute top-1 bottom-1 left-1 bg-[#c5a059] rounded-xl shadow-[0_0_15px_rgba(197,160,89,0.3)]"
              initial={false}
              animate={{
                width: 'calc(50% - 4px)',
                x: method === 'cash' ? '100%' : '0%', // لأننا شغالين RTL
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          {/* كارد المحتوى المتغير */}
          <div className="relative min-h-100">
            <AnimatePresence mode="wait">
              {method === 'cash' ? (
                <motion.div
                  key="cash"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-[#111] border border-[#c5a059]/30 rounded-3xl p-8 text-center shadow-2xl h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-6 border border-[#c5a059]/20">
                    <Wallet size={40} className="text-[#c5a059]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">الدفع عبر  (Vodafone Cash)</h3>
                  <p className="text-gray-200 text-xl leading-relaxed underline">
                    01000436389
                  </p>
                  <p className="text-[#c5a059] text-lg leading-relaxed">
                    Abdelmoneim S ABWSALH
                  </p>
                  <div className="mt-8 pt-6 border-t border-[#c5a059]/10 w-full">
                    <span className="text-[#c5a059] text-sm tracking-widest uppercase">Diamond Dental Centers</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="instapay"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-[#111] border border-[#c5a059]/30 rounded-3xl p-8 text-center shadow-2xl h-full flex flex-col items-center justify-center"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <QrCode className="text-[#c5a059]" />
                    امسح الكود للدفع عبر Instapay
                  </h3>
                  
                  {/* مكان الباركود */}
                  <div className="relative group p-4 bg-white rounded-2xl mb-6">
                    <img 
                      src="/img/cash.jpeg" // تأكد من وجود صورة الباركود هنا
                      alt="Instapay QR Code" 
                      className="w-48 h-48 object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-[#c5a059] rounded-2xl scale-105 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <p className="text-[#c5a059] font-mono text-lg mb-2 underline">men3emsamir@instapay</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;