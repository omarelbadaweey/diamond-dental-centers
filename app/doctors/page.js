
"use client";
import React from "react";
import { motion } from "framer-motion";
import Back from "../components/Back";

const Staff = () => {
  const doctors = [
    { name: "د. عبد المنعم سمير", img: "/img/d1.jpeg" },
    { name: "د. محمد عبد الحميد", img: "/img/d2.jpeg" },
    { name: "د. محمد القلا", img: "/img/d3.jpeg" },
    { name: "د. مؤمن جابر", img: "/img/d4.jpeg" },
    { name: "د. أحمد خليفة", img: "/img/d5.jpeg" },
    { name: "د. إسلام على تعلب", img: "/img/d6.jpeg" },
    { name: "د. سامح ياسين", img: "/img/d7.jpeg" },
    { name: "د. محمد مختار", img: "/img/d8.jpeg" },
    { name: "د. بسمة أيمن", img: "/img/d9.jpeg" },
  ];

  return (
    <section className="pb-16 pt-26" dir="rtl">
      <Back/>
      <h2 className="text-center text-[#c5a059] text-4xl mb-2 font-serif">
        نخبة الأطباء
      </h2>
      <div className="h-1 w-32 bg-[#b8a145] mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(184,161,69,0.4)]"></div>

      <div className="flex flex-wrap justify-center gap-10 px-4 ">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            // الإعدادات الجديدة للطلوع والنزول المستمر
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            // التعديل هنا: شلنا once: true وضبطنا الـ amount
            viewport={{
              once: false, // يشتغل كل مرة (طلوع ونزول)
              amount: 0.2, // يبدأ الأنيميشن لما 20% من الكارت يظهر في الشاشة
            }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.1, // سرعة أكبر في الاستجابة
              ease: "easeOut",
            }}
            className="group relative w-72 h-96 overflow-hidden border-2 rounded-2xl border-[#c5a059] bg-[#0a0a0a] shadow-2xl shadow-[#c5a059]/20  "
          >
            <img
              src="/logo.png"
              className="absolute z-100 top-3 right-3 border-2 border-white outline-3 outline-black w-12 h-12 rounded-full "
              alt="logo"
            />
            <p className="absolute z-100 top-3 left-3 bg-linear-to-r from-[#644100] to-[#ffa200] text-transparent text-clip bg-clip-text text-lg  font-extrabold animate-bounce">Diamond Dental Centers</p>

            <motion.div
              className="w-full h-full"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* طبقة السواد */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>

            {/* منطقة الاسم */}
            <motion.div
              className="absolute bottom-0 w-full bg-[#0a0a0a] p-5 text-center border-t border-[#c5a059] z-20"
              animate={{
                backgroundColor: ["#0a0a0aee", "#151515ee", "#0a0a0aee"],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <h3 className="text-[#c5a059] font-bold text-lg tracking-tight">
                {doc.name}
              </h3>

              <motion.div
                className="h-0.5 bg-[#c5a059] mx-auto mt-2 rounded-full"
                animate={{
                  width: ["30%", "60%", "30%"],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
