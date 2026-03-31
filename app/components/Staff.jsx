
// // "use client";
// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const Staff = () => {
// //   const doctors = [
// //     { name: "د. عبد المنعم سمير", img: "/img/dr4.jpg" },
// //     { name: "د. محمد عبد الحميد",  img: "/img/dr1.jpg" },
// //     { name: "د. محمد القلا", img: "/img/dr2.jpg" },
// //     { name: "د. مؤمن جابر", img: "/img/dr3.jpg" },
// //     { name: "د. أحمد خليفة", img: "/img/dr5.jpg" },
// //     { name: "د. إسلام على تعلب", img: "/img/dr6.jpg" },
// //     { name: "د. سامح ياسين", img: "/img/dr7.jpg" },
// //     { name: "د. محمد مختار", img: "/img/dr8.jpg" },
// //     { name: "د. بسمة أيمن", img: "/img/dr9.jpg" },
// //   ];

// //   return (
// //     <section className="pb-16 " dir="rtl">
// //       <h2 className="text-center text-[#c5a059] text-4xl mb-2 font-serif">نخبة الأطباء</h2>
// //       <div className="h-1 w-32 bg-[#b8a145] mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(184,161,69,0.4)]"></div>
      
// //       <div className="flex flex-wrap justify-center gap-10 px-4">
// //         {doctors.map((doc, i) => (
// //           <div 
// //             key={i} 
// //             className="group relative w-72 h-96 overflow-hidden border border-[#c5a059]/30 bg-[#0a0a0a] shadow-2xl"
// //           >
// //             {/* 1. أنيميشن الـ Scale التلقائي للصورة (باستخدام Framer Motion) */}
// //             <motion.div 
// //               className="w-full h-full"
// //               animate={{
// //                 scale: [1, 1.08, 1], // بيكبر ويرجع يصغر
// //               }}
// //               transition={{
// //                 duration: 6,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //                 delay: i * 0.8 // تفاوت بين الكروت
// //               }}
// //             >
// //               <img 
// //                 src={doc.img} 
// //                 alt={doc.name} 
// //                 className="w-full h-full object-cover" 
// //               />
// //             </motion.div>

// //             {/* 2. طبقة سواد تدريجي ثابتة للفخامة */}
// //             <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>

// //             {/* 3. منطقة الاسم مع أنيميشن النبض (Pulse) والارتفاع الخفيف */}
// //             <motion.div 
// //               className="absolute bottom-0 w-full bg-[#0a0a0a] p-5 text-center border-t border-[#c5a059] z-20"
// //               animate={{
// //                 backgroundColor: ["#0a0a0aee", "#151515ee", "#0a0a0aee"],
// //                 y: [0, -3, 0] // حركة طلوع ونزول خفيفة جداً
// //               }}
// //               transition={{
// //                 duration: 4,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //                 delay: i * 0.5
// //               }}
// //             >
// //               <h3 className="text-[#c5a059] font-bold text-lg tracking-tight">
// //                 {doc.name}
// //               </h3>
              
// //               {/* خط ذهبي بينبض تحت الاسم */}
// //               <motion.div 
// //                 className="h-0.5 bg-[#c5a059] mx-auto mt-2 rounded-full"
// //                 animate={{
// //                   width: ["30%", "60%", "30%"],
// //                   opacity: [0.3, 0.8, 0.3]
// //                 }}
// //                 transition={{
// //                   duration: 3,
// //                   repeat: Infinity,
// //                   ease: "easeInOut",
// //                   delay: i * 0.5
// //                 }}
// //               />
// //             </motion.div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Staff;



// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';

// const Staff = () => {
//   const doctors = [
//     { name: "د. عبد المنعم سمير", img: "/img/dr4.jpg" },
//     { name: "د. محمد عبد الحميد",  img: "/img/dr1.jpg" },
//     { name: "د. محمد القلا", img: "/img/dr2.jpg" },
//     { name: "د. مؤمن جابر", img: "/img/dr3.jpg" },
//     { name: "د. أحمد خليفة", img: "/img/dr5.jpg" },
//     { name: "د. إسلام على تعلب", img: "/img/dr6.jpg" },
//     { name: "د. سامح ياسين", img: "/img/dr7.jpg" },
//     { name: "د. محمد مختار", img: "/img/dr8.jpg" },
//     { name: "د. بسمة أيمن", img: "/img/dr9.jpg" },
//   ];

//   return (
//     <section className="pb-16 " dir="rtl">
//       <h2 className="text-center text-[#c5a059] text-4xl mb-2 font-serif">نخبة الأطباء</h2>
//       <div className="h-1 w-32 bg-[#b8a145] mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(184,161,69,0.4)]"></div>
      
//       <div className="flex flex-wrap justify-center gap-10 px-4">
//         {doctors.map((doc, i) => (
//           // التعديل هنا: إضافة موشن للديف الخارجي للكارت
//           <motion.div 
//             key={i} 
//             // أنيميشن الظهور عند السكرول
//             initial={{ opacity: 0, y: 50, scale: 0.9 }} // بيبدأ شفاف ونازل لتحت وصغير شوية
//             whileInView={{ opacity: 1, y: 0, scale: 1 }} // لما يظهر في الشاشة يرجع لمكانه الطبيعي
//             viewport={{ once: true, margin: "-50px" }} // يشتغل مرة واحدة بس أول ما يقرب من الشاشة
//             transition={{ 
//               duration: 0.6, 
//               delay: (i % 3) * 0.2, // تفاوت في الظهور بناءً على ترتيبه في الصف
//               ease: "easeOut" 
//             }}
//             className="group relative w-72 h-96 overflow-hidden border border-[#c5a059]/30 bg-[#0a0a0a] shadow-2xl"
//           >
//             {/* 1. أنيميشن الـ Scale التلقائي للصورة (كما هو بدون تغيير) */}
//             <motion.div 
//               className="w-full h-full"
//               animate={{
//                 scale: [1, 1.08, 1],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.8
//               }}
//             >
//               <img 
//                 src={doc.img} 
//                 alt={doc.name} 
//                 className="w-full h-full object-cover" 
//               />
//             </motion.div>

//             {/* 2. طبقة سواد تدريجي ثابتة */}
//             <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>

//             {/* 3. منطقة الاسم (كما هي بدون تغيير) */}
//             <motion.div 
//               className="absolute bottom-0 w-full bg-[#0a0a0a] p-5 text-center border-t border-[#c5a059] z-20"
//               animate={{
//                 backgroundColor: ["#0a0a0aee", "#151515ee", "#0a0a0aee"],
//                 y: [0, -3, 0]
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.5
//               }}
//             >
//               <h3 className="text-[#c5a059] font-bold text-lg tracking-tight">
//                 {doc.name}
//               </h3>
              
//               <motion.div 
//                 className="h-0.5 bg-[#c5a059] mx-auto mt-2 rounded-full"
//                 animate={{
//                   width: ["30%", "60%", "30%"],
//                   opacity: [0.3, 0.8, 0.3]
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: i * 0.5
//                 }}
//               />
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Staff;



"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Staff = () => {
  const doctors = [
    { name: "د. عبد المنعم سمير", img: "/img/dr4.jpg" },
    { name: "د. محمد عبد الحميد",  img: "/img/dr1.jpg" },
    { name: "د. محمد القلا", img: "/img/dr2.jpg" },
    { name: "د. مؤمن جابر", img: "/img/dr3.jpg" },
    { name: "د. أحمد خليفة", img: "/img/dr5.jpg" },
    { name: "د. إسلام على تعلب", img: "/img/dr6.jpg" },
    { name: "د. سامح ياسين", img: "/img/dr7.jpg" },
    { name: "د. محمد مختار", img: "/img/dr8.jpg" },
    { name: "د. بسمة أيمن", img: "/img/dr9.jpg" },
  ];

  return (
    <section className="pb-16" dir="rtl">
      <h2 className="text-center text-[#c5a059] text-4xl mb-2 font-serif">نخبة الأطباء</h2>
      <div className="h-1 w-32 bg-[#b8a145] mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(184,161,69,0.4)]"></div>
      
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {doctors.map((doc, i) => (
          <motion.div 
            key={i} 
            // الإعدادات الجديدة للطلوع والنزول المستمر
            initial={{ opacity: 0, y: 40, scale: 0.95 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            // التعديل هنا: شلنا once: true وضبطنا الـ amount
            viewport={{ 
              once: false, // يشتغل كل مرة (طلوع ونزول)
              amount: 0.2  // يبدأ الأنيميشن لما 20% من الكارت يظهر في الشاشة
            }} 
            transition={{ 
              duration: 0.5, 
              delay: (i % 3) * 0.1, // سرعة أكبر في الاستجابة
              ease: "easeOut" 
            }}
            className="group relative w-72 h-96 overflow-hidden border border-[#c5a059]/30 bg-[#0a0a0a] shadow-2xl"
          >
            {/* أنيميشن الـ Scale التلقائي للصورة (ثابت) */}
            <motion.div 
              className="w-full h-full"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
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
                y: [0, -3, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <h3 className="text-[#c5a059] font-bold text-lg tracking-tight">
                {doc.name}
              </h3>
              
              <motion.div 
                className="h-0.5 bg-[#c5a059] mx-auto mt-2 rounded-full"
                animate={{
                  width: ["30%", "60%", "30%"],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
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