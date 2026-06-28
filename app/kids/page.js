// // // // // "use client";

// // // // // import React from "react";
// // // // // import Image from "next/image";

// // // // // export default function KidsDepartment() {
// // // // //   // الألوان مستوحاة بالظبط من اللوجو الباستيل المبهج
// // // // //   const services = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "كشف بدون خوف",
// // // // //       desc: "عيادات مجهزة بألعاب وشاشات عرض كرتون عشان الطفل يحس إنه في رحلة ترفيهية مش عيادة سنان.",
// // // // //       icon: "🎈",
// // // // //       bgStyle: "bg-[#E2F0CB] text-[#556B2F]", // أخضر باستيل مبهج
// // // // //       borderColor: "border-[#C3E699]"
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: "وقاية وحماية السنان",
// // // // //       desc: "تطبيق جلسات الفلورايد ومواد سد الشقوق (Sealants) لحماية أسنان أطفالكم من التسوس قبل ما يبدأ.",
// // // // //       icon: "✨",
// // // // //       bgStyle: "bg-[#FFDAC1] text-[#8B5A2B]", // برتقالي/بيج دافئ
// // // // //       borderColor: "border-[#FFBFA3]"
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: "علاج تسوس الأطفال",
// // // // //       desc: "تنظيف التسوس بأحدث الأجهزة وبدون ألم، مع حشوات تجميلية ملونة للأطفال اللي بيحبوا يختاروا ألوانهم.",
// // // // //       icon: "🧚‍♂️",
// // // // //       bgStyle: "bg-[#FFB7B2] text-[#8B3A3A]", // بينك/وردي لطيف
// // // // //       borderColor: "border-[#FF9E99]"
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       title: "حافظ المسافات",
// // // // //       desc: "تركيب حافظ المسافة في حالة فقدان سن لبني مبكراً، عشان نضمن إن السنان الدائمة تطلع في مكانها الصح مستقبلاً.",
// // // // //       icon: "👑",
// // // // //       bgStyle: "bg-[#B5E2FA] text-[#1D4ED8]", // أزرق سماوي ناعم
// // // // //       borderColor: "border-[#90E0EF]"
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <div className="min-h-screen bg-[#F7F9FB] text-[#333] font-sans rtl selection:bg-[#FFB7B2]">
      
// // // // //       {/* 1. هيدر الأطفال المبهج (Kids Header) */}
// // // // //       <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
// // // // //           {/* اللوجو والاسم */}
// // // // //           <div className="flex items-center gap-3 cursor-pointer">
// // // // //             <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFB7B2] bg-white p-1">
// // // // //               {/* استبدل src بمسار اللوجو الحقيقي عندك لو حابب */}
// // // // //               <img src="/logo.png" alt="Diamond Kids Logo" className="object-contain w-full h-full" />
// // // // //             </div>
// // // // //             <div>
// // // // //               <span className="font-bold text-xl tracking-tight block bg-gradient-to-r from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] bg-clip-text text-transparent">
// // // // //                 DIAMOND
// // // // //               </span>
// // // // //               <span className="text-xs font-bold text-[#E2F0CB] bg-[#556B2F] px-1.5 py-0.2 rounded-full block text-center mt-0.5">
// // // // //                 KIDS 👑
// // // // //               </span>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* زرار العودة السريعة للموقع الرئيسي */}
// // // // //           <nav>
// // // // //             <a 
// // // // //               href="/" 
// // // // //               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-[#B5E2FA] text-[#1D4ED8] font-bold text-sm hover:bg-[#B5E2FA]/10 transition-all shadow-sm"
// // // // //             >
// // // // //               <span>الرئيسية</span>
// // // // //               <span>🏠</span>
// // // // //             </a>
// // // // //           </nav>

// // // // //         </div>
// // // // //       </header>

// // // // //       {/* 2. الهيرو سكشن (Hero Section) */}
// // // // //       <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7F9FB] to-white py-16 lg:py-24">
// // // // //         {/* أشكال ديكورية في الخلفية */}
// // // // //         <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFDAC1]/40 rounded-full blur-xl animate-pulse"></div>
// // // // //         <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#B5E2FA]/40 rounded-full blur-2xl"></div>

// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
// // // // //             {/* الكلام والترحيب */}
// // // // //             <div className="text-center lg:text-right space-y-6">
// // // // //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B5E2FA]/20 text-[#1D4ED8] font-bold text-sm">
// // // // //                 <span>مرحباً بكم في عالم الابتسامات السعيدة!</span>
// // // // //                 <span>✨</span>
// // // // //               </div>
// // // // //               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#222] leading-tight">
// // // // //                 عيادة أسنان صُممت <br />
// // // // //                 <span className="bg-gradient-to-r from-[#FFB7B2] to-[#FFDAC1] bg-clip-text text-transparent">
// // // // //                   خصيصاً لأبطالنا الصغار
// // // // //                 </span>
// // // // //               </h1>
// // // // //               <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
// // // // //                 في مراكز دايموند، بنحول زيارة دكتور السنان لتجربة كلها ألعاب ومرح. رعاية طبية متكاملة لأسنان أطفالكم بدون أي خوف أو ألم.
// // // // //               </p>
// // // // //               <div className="pt-4">
// // // // //                 <button className="px-8 py-4 bg-gradient-to-r from-[#FFB7B2] to-[#FFDAC1] text-white font-extrabold text-lg rounded-full shadow-lg shadow-[#FFB7B2]/30 hover:scale-105 transition-all">
// // // // //                   احجز موعد لبُطلك الآن 🌟
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* الصورة التوضيحية (اللوجو الكرتوني اللطيف) */}
// // // // //             <div className="flex justify-center items-center">
// // // // //               <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
// // // // //                 <div className="absolute -top-5 -right-5 w-12 h-12 bg-[#E2F0CB] rounded-full flex items-center justify-center shadow text-xl">🎈</div>
// // // // //                 <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-[#B5E2FA] rounded-full flex items-center justify-center shadow text-xl">⭐</div>
// // // // //                 {/* هنا حط صورة اللوجو المبهج بتاع الأطفال */}
// // // // //                 <img 
// // // // //                   src="/image_7e2d45.jpg" 
// // // // //                   alt="Diamond Dental Kids" 
// // // // //                   className="rounded-2xl object-contain w-full h-full"
// // // // //                 />
// // // // //               </div>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* 3. سكشن الخدمات (Our Services) */}
// // // // //       <section className="py-16 bg-white">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
// // // // //           {/* عنوان السكشن */}
// // // // //           <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
// // // // //             <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
// // // // //               خدماتنا السحرية لأسنان قوية 💪
// // // // //             </h2>
// // // // //             <p className="text-gray-500 text-base sm:text-lg">
// // // // //               بنقدم كل اللي محتاجه طفلك لحماية وعلاج أسنانه بأحدث التقنيات وبأعلى درجات اللطف والراحة.
// // // // //             </p>
// // // // //             <div className="w-24 h-1.5 bg-gradient-to-r from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] mx-auto rounded-full"></div>
// // // // //           </div>

// // // // //           {/* كروت الخدمات اللطيفة */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // // // //             {services.map((service) => (
// // // // //               <div 
// // // // //                 key={service.id} 
// // // // //                 className={`p-6 rounded-2xl border-2 ${service.borderColor} ${service.bgStyle} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between`}
// // // // //               >
// // // // //                 <div>
// // // // //                   <div className="w-14 h-14 rounded-xl bg-white/80 shadow-sm flex items-center justify-center text-3xl mb-6">
// // // // //                     {service.icon}
// // // // //                   </div>
// // // // //                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>
// // // // //                   <p className="text-sm opacity-90 leading-relaxed">{service.desc}</p>
// // // // //                 </div>
// // // // //                 <div className="mt-6 pt-4 border-t border-white/20 flex justify-end">
// // // // //                   <span className="text-xs font-bold bg-white/40 px-3 py-1 rounded-full">دايموند كيدز ✨</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //         </div>
// // // // //       </section>

// // // // //       {/* 4. فوتر الأطفال المخصص (Kids Footer) */}
// // // // //       <footer className="bg-gray-900 text-gray-400 py-12 border-t-4 border-[#FFB7B2]">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
// // // // //           <div className="flex justify-center items-center gap-2">
// // // // //             <span className="text-xl font-black text-white">مراكز دايموند لطب الأسنان</span>
// // // // //             <span className="px-2 py-0.5 bg-[#FFDAC1] text-[#8B5A2B] font-bold text-xs rounded-full">قسم الأطفال</span>
// // // // //           </div>
// // // // //           <p className="text-sm max-w-md mx-auto text-gray-400">
// // // // //             شربين - دكرنس. عيادات مخصصة ومجهزة بالكامل لتوفير بيئة آمنة وممتعة لأطفالكم.
// // // // //           </p>
// // // // //           <div className="flex justify-center gap-4 text-xs font-semibold">
// // // // //             <span className="px-3 py-1 bg-gray-800 rounded-full text-[#B5E2FA]">#أسنان_أطفال</span>
// // // // //             <span className="px-3 py-1 bg-gray-800 rounded-full text-[#FFB7B2]">#بدون_ألم</span>
// // // // //             <span className="px-3 py-1 bg-gray-800 rounded-full text-[#E2F0CB]">#ابتسامة_دايموند</span>
// // // // //           </div>
// // // // //           <div className="pt-6 border-t border-gray-800 text-xs text-gray-500">
// // // // //             &copy; {new Date().getFullYear()} Diamond Dental Centers. جميع الحقوق محفوظة لصناع الابتسامة.
// // // // //           </div>
// // // // //         </div>
// // // // //       </footer>

// // // // //     </div>
// // // // //   );
// // // // // }



















// // // // "use client";

// // // // import React from "react";

// // // // export default function KidsDepartment() {
// // // //   // بيانات الخدمات مرتبة بشكل احترافي مع أكواد الألوان الدقيقة من اللوجو
// // // //   const services = [
// // // //     {
// // // //       id: "01",
// // // //       title: "الفحص الدوري والمتابعة",
// // // //       englishTitle: "Check-ups & Monitoring",
// // // //       desc: "فحص شامل لنمو الفكين والأسنان باستخدام أحدث وسائل التشخيص الرقمية اللطيفة على الطفل.",
// // // //       color: "#B5E2FA", // الأزرق السماوي من اللوجو
// // // //       textColor: "#1A4F6E",
// // // //       bgColor: "bg-[#B5E2FA]/10",
// // // //       borderColor: "border-[#B5E2FA]/30",
// // // //     },
// // // //     {
// // // //       id: "02",
// // // //       title: "الوقاية من التسوس",
// // // //       englishTitle: "Fluoride & Sealants",
// // // //       desc: "تطبيق جلسات الفلورايد ومواد سد الشقوق لحماية طبقة المينا ومنع التسوس قبل حدوثه.",
// // // //       color: "#E2F0CB", // الأخضر الباستيل
// // // //       textColor: "#3B5219",
// // // //       bgColor: "bg-[#E2F0CB]/10",
// // // //       borderColor: "border-[#E2F0CB]/30",
// // // //     },
// // // //     {
// // // //       id: "03",
// // // //       title: "تقويم أسنان الأطفال",
// // // //       englishTitle: "Kids' Orthodontics",
// // // //       desc: "توجيه نمو الأسنان الدائمة وتعديل الفكين في مرحلة مبكرة بأجهزة مريحة وغير مرئية.",
// // // //       color: "#FFDAC1", // البرتقالي الناعم
// // // //       textColor: "#6B3E1E",
// // // //       bgColor: "bg-[#FFDAC1]/10",
// // // //       borderColor: "border-[#FFDAC1]/30",
// // // //     },
// // // //     {
// // // //       id: "04",
// // // //       title: "علاجات الأسنان اللبنية",
// // // //       englishTitle: "Milk Tooth Treatments",
// // // //       desc: "علاج وحشو الأسنان اللبنية وحفظ المسافات لضمان خروج الأسنان الدائمة في مسارها الصحيح.",
// // // //       color: "#FFB7B2", // الوردي الباستيل
// // // //       textColor: "#6E221E",
// // // //       bgColor: "bg-[#FFB7B2]/10",
// // // //       borderColor: "border-[#FFB7B2]/30",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-[#FAF9F6] text-[#2C3E50] font-sans rtl selection:bg-[#FFB7B2]/30 antialiased">
      
// // // //       {/* 1. الهيدر الاحترافي (Premium Header) */}
// // // //       <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
// // // //         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
// // // //           {/* براند العيادة */}
// // // //           <div className="flex items-center gap-4">
// // // //             <div className="relative w-11 h-11 bg-white rounded-xl shadow-sm border border-gray-100 p-1.5 flex items-center justify-center">
// // // //               <img src="/logo.png" alt="Diamond Dental Centers" className="object-contain w-full h-full" />
// // // //             </div>
// // // //             <div>
// // // //               <span className="font-bold text-lg tracking-wider block text-gray-900 font-mono">
// // // //                 DIAMOND <span className="text-gray-400 font-light">DENTAL</span>
// // // //               </span>
// // // //               <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 block">
// // // //                 Kids Department • قسم الأطفال
// // // //               </span>
// // // //             </div>
// // // //           </div>

// // // //           {/* زر العودة للموقع الرئيسي */}
// // // //           <nav>
// // // //             <a 
// // // //               href="/" 
// // // //               className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-150 transition-all shadow-xs"
// // // //             >
// // // //               <span>الرئيسية</span>
// // // //               <span className="text-xs text-gray-400">←</span>
// // // //             </a>
// // // //           </nav>

// // // //         </div>
// // // //       </header>

// // // //       {/* 2. قطاع الترحيب والهيرو (Hero Section) */}
// // // //       <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#FAF9F6]">
// // // //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
// // // //             {/* النصوص التعريفية */}
// // // //             <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
// // // //               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-xs text-xs font-semibold text-gray-600">
// // // //                 <span className="w-2 h-2 rounded-full bg-[#FFB7B2]"></span>
// // // //                 رعاية طبية بمقاييس عالمية تناسب طبيعة طفلك
// // // //               </div>
              
// // // //               <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.25]">
// // // //                 رعاية متكاملة لابتسامة <br className="hidden sm:inline"/>
// // // //                 <span className="bg-gradient-to-r from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] bg-clip-text text-transparent">
// // // //                   تبني مستقبل أطفالنا
// // // //                 </span>
// // // //               </h1>
              
// // // //               <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
// // // //                 في عيادات دايموند للأطفال، نمزج بين دقة التشغيل الطبي والبيئة المريحة الخالية من التوتر. نضمن لطفلك تجربة علاجية فريدة تُشكل وعيه الصحي بكل إيجابية وبدون خوف.
// // // //               </p>
              
// // // //               <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// // // //                 <button className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-xl shadow-lg shadow-gray-900/10 hover:bg-gray-800 transition-all transform hover:-translate-y-0.5">
// // // //                   احجز موعداً لطفلك الآن
// // // //                 </button>
// // // //                 <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
// // // //                   اكتشف خدماتنا الطبيّة ↓
// // // //                 </a>
// // // //               </div>
// // // //             </div>

// // // //             {/* عرض الصورة (اللوجو الهادئ النظيف) */}
// // // //             <div className="lg:col-span-5 flex justify-center">
// // // //               <div className="relative w-full max-w-[360px] aspect-square bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center">
// // // //                 {/* خلفية جمالية خفيفة خلف اللوجو */}
// // // //                 <div className="absolute inset-4 rounded-xl bg-gradient-to-tr from-[#B5E2FA]/10 via-[#FFB7B2]/10 to-[#FFDAC1]/10 opacity-70"></div>
                
// // // //                 <img 
// // // //                   src="/image_7e2d45.jpg" 
// // // //                   alt="Diamond Dental Centers Logo" 
// // // //                   className="relative z-10 rounded-xl object-contain w-full h-full p-2"
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* 3. سكشن الخدمات المرتب والمنظم (Services Section) */}
// // // //       <section id="services" className="py-20 bg-white border-t border-gray-100">
// // // //         <div className="max-w-7xl mx-auto px-6">
          
// // // //           {/* عنوان السكشن الجاد والمحترف */}
// // // //           <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
// // // //             <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
// // // //               خدماتنا الطبية المتخصصة للأطفال
// // // //             </h2>
// // // //             <p className="text-gray-500 text-sm sm:text-base font-light">
// // // //               منظومة علاجية ووقائية متكاملة مصممة خصيصاً لتلبية احتياجات صحة فم وأسنان الأطفال من عمر عام وحتى المراهقة.
// // // //             </p>
// // // //             <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
// // // //           </div>

// // // //           {/* شبكة كروت الخدمات الهندسية */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //             {services.map((service) => (
// // // //               <div 
// // // //                 key={service.id} 
// // // //                 className={`group p-8 rounded-2xl border ${service.borderColor} ${service.bgColor} hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 flex flex-col justify-between`}
// // // //               >
// // // //                 <div>
// // // //                   {/* رقم الخدمة والأيقونة الملونة هادية */}
// // // //                   <div className="flex items-center justify-between mb-8">
// // // //                     <span className="text-xs font-mono font-bold tracking-widest text-gray-400">
// // // //                       {service.id}
// // // //                     </span>
// // // //                     <div 
// // // //                       className="w-2.5 h-2.5 rounded-full" 
// // // //                       style={{ backgroundColor: service.color }}
// // // //                     ></div>
// // // //                   </div>

// // // //                   {/* العناوين */}
// // // //                   <div className="space-y-1 mb-4">
// // // //                     <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
// // // //                       {service.title}
// // // //                     </h3>
// // // //                     <span className="block text-[11px] font-mono font-medium text-gray-400 uppercase tracking-wider">
// // // //                       {service.englishTitle}
// // // //                     </span>
// // // //                   </div>

// // // //                   {/* الوصف */}
// // // //                   <p className="text-sm text-gray-600 leading-relaxed font-light">
// // // //                     {service.desc}
// // // //                   </p>
// // // //                 </div>

// // // //                 {/* مؤشر تفاعلي بسيط أسفل الكارت */}
// // // //                 <div className="mt-8 pt-4 border-t border-gray-100/50 flex items-center justify-between text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
// // // //                   <span>مركز دايموند للأطفال</span>
// // // //                   <span className="transform group-hover:translate-x-1 transition-transform">←</span>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //         </div>
// // // //       </section>

// // // //       {/* 4. الفوتر المنظم والمودرن (Clean Corporate Footer) */}
// // // //       <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-100">
// // // //         <div className="max-w-7xl mx-auto px-6">
// // // //           <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            
// // // //             <div>
// // // //               <p className="text-sm font-semibold text-gray-900">
// // // //                 مراكز دايموند لطب وتجميل الأسنان
// // // //               </p>
// // // //               <p className="text-xs text-gray-400 mt-1">
// // // //                 فروعنا: شربين - دكرنس | عيادات تخصصية متكاملة
// // // //               </p>
// // // //             </div>

// // // //             <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-gray-500">
// // // //               <span className="hover:text-gray-900 cursor-pointer">عن المركز</span>
// // // //               <span className="hover:text-gray-900 cursor-pointer">أطباء الأطفال</span>
// // // //               <span className="hover:text-gray-900 cursor-pointer">الشروط والأحكام</span>
// // // //             </div>

// // // //           </div>
          
// // // //           <div className="mt-8 pt-8 border-t border-gray-200/60 text-center text-xs text-gray-400">
// // // //             &copy; {new Date().getFullYear()} Diamond Dental Centers. قسم الرعاية الطبية للأطفال.
// // // //           </div>
// // // //         </div>
// // // //       </footer>

// // // //     </div>
// // // //   );
// // // // }




// // // "use client";

// // // import React from "react";

// // // export default function KidsDepartment() {
// // //   // بيانات الخدمات - الألوان هنا بقت للحدود فقط (Border) والكلام أسود صريح لقراءة مريحة
// // //   const services = [
// // //     {
// // //       id: "01",
// // //       title: "الفحص الدوري والمتابعة",
// // //       englishTitle: "Check-ups & Monitoring",
// // //       desc: "فحص شامل ودقيق لنمو الفكين والأسنان باستخدام أحدث وسائل التشخيص الرقمية اللطيفة على الطفل.",
// // //       borderColor: "border-[#B5E2FA]", // أزرق اللوجو على الحواف بس
// // //     },
// // //     {
// // //       id: "02",
// // //       title: "الوقاية من التسوس",
// // //       englishTitle: "Fluoride & Sealants",
// // //       desc: "تطبيق جلسات الفلورايد ومواد سد الشقوق لحماية طبقة المينا ومنع التسوس قبل حدوثه.",
// // //       borderColor: "border-[#E2F0CB]", // أخضر اللوجو على الحواف بس
// // //     },
// // //     {
// // //       id: "03",
// // //       title: "تقويم أسنان الأطفال",
// // //       englishTitle: "Kids' Orthodontics",
// // //       desc: "توجيه نمو الأسنان الدائمة وتعديل الفكين في مرحلة مبكرة بأجهزة مريحة وغير مرئية.",
// // //       borderColor: "border-[#FFDAC1]", // برتقالي اللوجو على الحواف بس
// // //     },
// // //     {
// // //       id: "04",
// // //       title: "علاجات الأسنان اللبنية",
// // //       englishTitle: "Milk Tooth Treatments",
// // //       desc: "علاج وحشو الأسنان اللبنية وحفظ المسافات لضمان خروج الأسنان الدائمة في مسارها الصحيح.",
// // //       borderColor: "border-[#FFB7B2]", // وردي اللوجو على الحواف بس
// // //     },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-white text-gray-950 font-sans rtl selection:bg-gray-200 antialiased">
      
// // //       {/* 1. هيدر احترافي أبيض صريح */}
// // //       <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
// // //         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
// // //           {/* براند العيادة */}
// // //           <div className="flex items-center gap-4">
// // //             <div className="w-11 h-11 bg-white border border-gray-200 rounded-xl p-1.5 flex items-center justify-center">
// // //               <img src="/logo.png" alt="Diamond Dental Centers" className="object-contain w-full h-full" />
// // //             </div>
// // //             <div>
// // //               <span className="font-bold text-lg tracking-wider block text-gray-900">
// // //                 DIAMOND <span className="text-gray-500 font-light">DENTAL</span>
// // //               </span>
// // //               <span className="text-[11px] uppercase tracking-widest font-bold text-gray-500 block">
// // //                 طب أسنان الأطفال
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* زر العودة للموقع الرئيسي */}
// // //           <nav>
// // //             <a 
// // //               href="/" 
// // //               className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-150 border border-gray-300 text-gray-900 font-semibold text-sm hover:bg-gray-200 transition-all"
// // //             >
// // //               <span>الرئيسية</span>
// // //               <span className="text-xs">←</span>
// // //             </a>
// // //           </nav>

// // //         </div>
// // //       </header>

// // //       {/* 2. الهيرو سكشن - خلفية بيضاء بالكامل لراحة العين */}
// // //       <section className="py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
// // //             {/* النصوص - أسود صريح وواضح */}
// // //             <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
// // //               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 border border-gray-200 text-xs font-bold text-gray-700">
// // //                 رعاية طبية بمقاييس عالمية تناسب طبيعة طفلك
// // //               </div>
              
// // //               <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
// // //                 رعاية متكاملة لابتسامة <br />
// // //                 <span className="text-gray-900 underline decoration-[#FFB7B2] decoration-4">
// // //                   تبني مستقبل أطفالنا
// // //                 </span>
// // //               </h1>
              
// // //               <p className="text-gray-800 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
// // //                 في عيادات دايموند للأطفال، نمزج بين دقة التشغيل الطبي والبيئة المريحة الخالية من التوتر. نضمن لطفلك تجربة علاجية فريدة تُشكل وعيه الصحي بكل إيجابية وبدون خوف.
// // //               </p>
              
// // //               <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// // //                 <button className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all">
// // //                   احجز موعداً لطفلك الآن
// // //                 </button>
// // //                 <a href="#services" className="text-sm font-bold text-gray-700 hover:text-gray-900 underline">
// // //                   اكتشف خدماتنا الطبيّة ↓
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* عرض صورة اللوجو في مربع نظيف وواضح */}
// // //             <div className="lg:col-span-5 flex justify-center">
// // //               <div className="w-full max-w-[360px] aspect-square bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md flex items-center justify-center">
// // //                 <img 
// // //                   src="/image_7e2d45.jpg" 
// // //                   alt="Diamond Dental Centers Logo" 
// // //                   className="rounded-xl object-contain w-full h-full"
// // //                 />
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* 3. سكشن الخدمات المرتب (نصوص سوداء على خلفية بيضاء صريحة) */}
// // //       <section id="services" className="py-20 bg-white border-t border-gray-200">
// // //         <div className="max-w-7xl mx-auto px-6">
          
// // //           {/* عنوان السكشن */}
// // //           <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
// // //             <h2 className="text-3xl font-black text-gray-900">
// // //               خدماتنا الطبية المتخصصة للأطفال
// // //             </h2>
// // //             <p className="text-gray-700 text-sm sm:text-base font-normal">
// // //               منظومة علاجية ووقائية متكاملة مصممة خصيصاً لتلبية احتياجات صحة فم وأسنان الأطفال من عمر عام وحتى المراهقة.
// // //             </p>
// // //             <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full mt-2"></div>
// // //           </div>

// // //           {/* شبكة كروت الخدمات الهندسية الواضحة جداً */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {services.map((service) => (
// // //               <div 
// // //                 key={service.id} 
// // //                 className={`p-6 rounded-xl border-t-4 ${service.borderColor} bg-white border-x border-b border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow`}
// // //               >
// // //                 <div>
// // //                   {/* رقم الخدمة */}
// // //                   <div className="mb-4">
// // //                     <span className="text-xs font-mono font-bold tracking-widest text-gray-400">
// // //                       {service.id}
// // //                     </span>
// // //                   </div>

// // //                   {/* العناوين بالأسود الصريح */}
// // //                   <div className="space-y-1 mb-3">
// // //                     <h3 className="text-lg font-black text-gray-900">
// // //                       {service.title}
// // //                     </h3>
// // //                     <span className="block text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider">
// // //                       {service.englishTitle}
// // //                     </span>
// // //                   </div>

// // //                   {/* الوصف الواضح جداً */}
// // //                   <p className="text-sm text-gray-900 leading-relaxed font-normal">
// // //                     {service.desc}
// // //                   </p>
// // //                 </div>

// // //                 <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
// // //                   <span>عيادات دايموند</span>
// // //                   <span>←</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* 4. الفوتر الرسمي الواضح */}
// // //       <footer className="bg-gray-100 text-gray-800 py-12 border-t border-gray-200">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            
// // //             <div>
// // //               <p className="text-sm font-bold text-gray-900">
// // //                 مراكز دايموند لطب وتجميل الأسنان
// // //               </p>
// // //               <p className="text-xs text-gray-600 mt-1">
// // //                 فروعنا: شربين - دكرنس | عيادات تخصصية متكاملة
// // //               </p>
// // //             </div>

// // //             <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-700">
// // //               <span className="hover:text-gray-900 cursor-pointer">عن المركز</span>
// // //               <span className="hover:text-gray-900 cursor-pointer">أطباء الأطفال</span>
// // //               <span className="hover:text-gray-900 cursor-pointer">اتصل بنا</span>
// // //             </div>

// // //           </div>
          
// // //           <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
// // //             &copy; {new Date().getFullYear()} Diamond Dental Centers. جميع الحقوق محفوظة.
// // //           </div>
// // //         </div>
// // //       </footer>

// // //     </div>
// // //   );
// // // }



// // "use client";

// // import React from "react";

// // export default function KidsDepartment() {
// //   // بيانات الخدمات: عناوين ملونة بألوان اللوجو المتناسقة، مع نصوص سوداء داكنة جداً للقراءة والوضوح الكامل
// //   const services = [
// //     {
// //       id: "01",
// //       title: "الفحص الدوري والمتابعة",
// //       englishTitle: "Check-ups & Monitoring",
// //       desc: "فحص دوري متكامل لنمو أسنان وفكين أطفالكم باستخدام تكنولوجيا تصوير رقمية متطورة بدون أي انزعاج للطفل.",
// //       titleColor: "text-[#1A4F6E]", // درجات الأزرق من اللوجو
// //       borderColor: "border-[#B5E2FA]",
// //       iconBg: "bg-[#B5E2FA]/20",
// //       icon: "🩺",
// //     },
// //     {
// //       id: "02",
// //       title: "الوقاية من التسوس",
// //       englishTitle: "Fluoride & Sealants",
// //       desc: "حماية طبقة المينا عبر جلسات الفلورايد المكثفة ومواد سد الشقوق لحماية الأسنان اللبنية والدائمة مبكراً.",
// //       titleColor: "text-[#3B5219]", // درجات الأخضر من اللوجو
// //       borderColor: "border-[#E2F0CB]",
// //       iconBg: "bg-[#E2F0CB]/30",
// //       icon: "🛡️",
// //     },
// //     {
// //       id: "03",
// //       title: "تقويم أسنان الأطفال",
// //       englishTitle: "Kids' Orthodontics",
// //       desc: "تعديل مسار الأسنان وتوجيه نمو عظام الفكين في المراحل المبكرة بأحدث الأجهزة الوقائية المريحة.",
// //       titleColor: "text-[#6B3E1E]", // درجات البرتقالي من اللوجو
// //       borderColor: "border-[#FFDAC1]",
// //       iconBg: "bg-[#FFDAC1]/30",
// //       icon: "🦷",
// //     },
// //     {
// //       id: "04",
// //       title: "علاجات الأسنان اللبنية",
// //       englishTitle: "Milk Tooth Treatments",
// //       desc: "تنظيف وحشو الأسنان اللبنية بدقة متناهية، مع تركيب حافظ المسافات لضمان خروج السن الدائم بمكانه الصحيح.",
// //       titleColor: "text-[#6E221E]", // درجات الوردي من اللوجو
// //       borderColor: "border-[#FFB7B2]",
// //       iconBg: "bg-[#FFB7B2]/30",
// //       icon: "✨",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-[#FAF6F0] text-gray-900 font-sans rtl selection:bg-[#FFB7B2]/40 antialiased">
      
// //       {/* 1. هيدر احترافي مدمج بألوان اللوجو */}
// //       <header className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#FFDAC1]/40 shadow-xs">
// //         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
// //           {/* براند العيادة */}
// //           <div className="flex items-center gap-4">
// //             <div className="w-12 h-12 bg-white border-2 border-[#FFB7B2]/60 rounded-2xl p-1 flex items-center justify-center shadow-xs">
// //               <img src="/logo.png" alt="Diamond Dental Centers" className="object-contain w-full h-full" />
// //             </div>
// //             <div>
// //               <span className="font-black text-xl tracking-wider block bg-gradient-to-r from-[#1A4F6E] to-[#6E221E] bg-clip-text text-transparent">
// //                 DIAMOND <span className="font-light">DENTAL</span>
// //               </span>
// //               <span className="text-[11px] uppercase tracking-widest font-black text-[#6B3E1E] bg-[#FFDAC1]/40 px-2 py-0.5 rounded-md inline-block mt-0.5">
// //                 KIDS • قسم الأطفال
// //               </span>
// //             </div>
// //           </div>

// //           {/* زر العودة للموقع الرئيسي */}
// //           <nav>
// //             <a 
// //               href="/" 
// //               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#B5E2FA] text-[#1A4F6E] font-bold text-sm hover:bg-[#B5E2FA]/10 transition-all shadow-xs"
// //             >
// //               <span>الرئيسية</span>
// //               <span className="text-xs">←</span>
// //             </a>
// //           </nav>

// //         </div>
// //       </header>

// //       {/* 2. الهيرو سكشن (Hero Section) الملون والمنظم */}
// //       <section className="py-16 lg:py-24 relative overflow-hidden">
// //         {/* لمسات خلفية ناعمة من ألوان اللوجو الباستيل لمنع الملل البصري */}
// //         <div className="absolute top-10 left-10 w-72 h-72 bg-[#B5E2FA]/30 rounded-full blur-3xl -z-10"></div>
// //         <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB7B2]/20 rounded-full blur-3xl -z-10"></div>

// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
// //             {/* النصوص الملونة والمنظمة بشكل احترافي رائع */}
// //             <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
// //               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#E2F0CB] text-[#3B5219] text-xs font-black shadow-xs">
// //                 ✨ رعاية طبية تخصصية بمقاييس عالمية تناسب أبطالنا
// //               </div>
              
// //               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.2]">
// //                 ابتسامات صغيرة، <br />
// //                 <span className="bg-gradient-to-r from-[#1A4F6E] via-[#6E221E] to-[#6B3E1E] bg-clip-text text-transparent">
// //                   قلوب ومستقبل كبيـر!
// //                 </span>
// //               </h1>
              
// //               <p className="text-gray-800 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
// //                 في عيادات دايموند للأطفال، نمزج بين دقة الرعاية الطبية الفائقة والبيئة المبهجة الغنية بالألوان المريحة. نضمن لطفلك تجربة فريدة تشكل وعيه الصحي بكل إيجابية وأمان.
// //               </p>
              
// //               <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
// //                 <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6E221E] to-[#6B3E1E] text-white font-black text-lg rounded-2xl shadow-md shadow-[#6E221E]/20 hover:scale-[1.02] transition-all">
// //                   احجز موعد أونلاين الآن 📅
// //                 </button>
// //                 <a href="#services" className="text-sm font-black text-[#1A4F6E] hover:underline decoration-2">
// //                   اكتشف تخصصات الأطفال الطبيّة ↓
// //                 </a>
// //               </div>
// //             </div>

// //             {/* عرض صورة اللوجو الاحترافية كعنصر براندينج أساسي */}
// //             <div className="lg:col-span-5 flex justify-center">
// //               <div className="w-full max-w-[385px] aspect-square bg-white rounded-3xl p-6 border-4 border-[#FFDAC1] shadow-xl shadow-gray-200/60 flex items-center justify-center relative">
// //                 {/* شريط ديكوري خلف الصورة مستوحى من قوس قزح اللوجو */}
// //                 <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] rounded-[28px] -z-10 opacity-60 blur-xs"></div>
                
// //                 <img 
// //                   src="/image_7e2d45.jpg" 
// //                   alt="Diamond Dental Centers Logo" 
// //                   className="rounded-2xl object-contain w-full h-full bg-[#FAF9F6]"
// //                 />
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* 3. سكشن الخدمات المرتب والملون باحترافية (كروت الـ Identity الملونة) */}
// //       <section id="services" className="py-20 bg-white border-t-2 border-[#FFDAC1]/30 relative">
// //         <div className="max-w-7xl mx-auto px-6">
          
// //           {/* عنوان السكشن الاحترافي */}
// //           <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
// //             <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
// //               خدماتنا الطبية المتخصصة للأطفال
// //             </h2>
// //             <p className="text-gray-600 text-sm sm:text-base font-medium">
// //               منظومة علاجية ووقائية متكاملة مصممة خصيصاً لتلبية احتياجات صحة فم وأسنان الأطفال من عمر عام وحتى المراهقة.
// //             </p>
// //             {/* خط ملون فخم تحت السكشن */}
// //             <div className="w-32 h-1.5 bg-gradient-to-r from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] mx-auto rounded-full"></div>
// //           </div>

// //           {/* شبكة الكروت: ملونة ومريحة وعالية التباين */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {services.map((service) => (
// //               <div 
// //                 key={service.id} 
// //                 className={`p-8 rounded-2xl border-2 ${service.borderColor} bg-[#FAF6F0]/40 hover:bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between`}
// //               >
// //                 <div>
// //                   {/* الأيقونة برقم الكارت */}
// //                   <div className="flex items-center justify-between mb-6">
// //                     <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center text-2xl shadow-xs`}>
// //                       {service.icon}
// //                     </div>
// //                     <span className="text-sm font-mono font-black text-gray-400 tracking-wider">
// //                       {service.id}
// //                     </span>
// //                   </div>

// //                   {/* عناوين الخدمة ملونة بالدرجة الخاصة بها من اللوجو */}
// //                   <div className="space-y-1 mb-4">
// //                     <h3 className={`text-xl font-black ${service.titleColor}`}>
// //                       {service.title}
// //                     </h3>
// //                     <span className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest">
// //                       {service.englishTitle}
// //                     </span>
// //                   </div>

// //                   {/* الوصف باللون الأسود الداكن جداً عشان تقرأه وتشوفه بوضوح أعمى */}
// //                   <p className="text-gray-950 text-sm leading-relaxed font-semibold">
// //                     {service.desc}
// //                   </p>
// //                 </div>

// //                 {/* مؤشر تفاعلي أسفل الكارت */}
// //                 <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-gray-500">
// //                   <span>عيادات دايموند كيدز</span>
// //                   <span className="text-sm">←</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       {/* 4. الفوتر المحترف المنسق بألوان الهوية */}
// //       <footer className="bg-gray-950 text-gray-300 py-16 border-t-4 border-[#FFB7B2]">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center border-b border-gray-800 pb-12 text-center md:text-right">
            
// //             {/* بلوك 1 */}
// //             <div className="space-y-3">
// //               <p className="text-lg font-black text-white">
// //                 مراكز دايموند لطب وتجميل الأسنان
// //               </p>
// //               <p className="text-xs text-gray-400 leading-relaxed font-medium">
// //                 فروعنا في شربين ودكرنس مجهزة بأحدث الوحدات والتقنيات الطبية العالمية لضمان سلامة وراحة عائلتكم.
// //               </p>
// //             </div>

// //             {/* بلوك 2 */}
// //             <div className="flex flex-col items-center justify-center space-y-2">
// //               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl">📞</div>
// //               <p className="text-sm font-mono font-bold text-white">010 1234 5678</p>
// //               <p className="text-[11px] text-gray-500 font-bold">تواصل مباشر مع عيادات الأطفال</p>
// //             </div>

// //             {/* بلوك 3 */}
// //             <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-bold text-gray-400">
// //               <span className="hover:text-[#FFB7B2] cursor-pointer transition-colors">عن المركز</span>
// //               <span className="hover:text-[#B5E2FA] cursor-pointer transition-colors">أطباء الأطفال</span>
// //               <span className="hover:text-[#FFDAC1] cursor-pointer transition-colors">مواعيد العمل</span>
// //             </div>

// //           </div>
          
// //           <div className="mt-8 text-center text-xs font-medium text-gray-600 tracking-wider">
// //             &copy; {new Date().getFullYear()} Diamond Dental Centers. مصمم باحترافية لهوية عيادات الأطفال الطبية.
// //           </div>
// //         </div>
// //       </footer>

// //     </div>
// //   );
// // }










// "use client";

// import React from "react";

// export default function KidsDepartment() {
//   // بيانات الخدمات: عناوين ملونة بألوان اللوجو، مع نصوص داكنة وواضحة جداً للقراءة
//   const services = [
//     {
//       id: "01",
//       title: "الفحص الدوري والمتابعة",
//       englishTitle: "Check-ups & Monitoring",
//       desc: "فحص دوري متكامل لنمو أسنان وفكين أطفالكم باستخدام تكنولوجيا تصوير رقمية متطورة بدون أي انزعاج للطفل.",
//       titleColor: "text-[#1A4F6E]", // أزرق اللوجو
//       borderColor: "border-[#B5E2FA]",
//       iconBg: "bg-[#B5E2FA]/20",
//       icon: "🩺",
//     },
//     {
//       id: "02",
//       title: "الوقاية من التسوس",
//       englishTitle: "Fluoride & Sealants",
//       desc: "حماية طبقة المينا عبر جلسات الفلورايد المكثفة ومواد سد الشقوق لحماية الأسنان اللبنية والدائمة مبكراً.",
//       titleColor: "text-[#3B5219]", // أخضر اللوجو
//       borderColor: "border-[#E2F0CB]",
//       iconBg: "bg-[#E2F0CB]/35",
//       icon: "🛡️",
//     },
//     {
//       id: "03",
//       title: "تقويم أسنان الأطفال",
//       englishTitle: "Kids' Orthodontics",
//       desc: "تعديل مسار الأسنان وتوجيه نمو عظام الفكين في المراحل المبكرة بأحدث الأجهزة الوقائية المريحة.",
//       titleColor: "text-[#6B3E1E]", // برتقالي اللوجو
//       borderColor: "border-[#FFDAC1]",
//       iconBg: "bg-[#FFDAC1]/35",
//       icon: "🦷",
//     },
//     {
//       id: "04",
//       title: "علاجات الأسنان اللبنية",
//       englishTitle: "Milk Tooth Treatments",
//       desc: "تنظيف وحشو الأسنان اللبنية بدقة متناهية، مع تركيب حافظ المسافات لضمان خروج السن الدائم بمكانه الصحيح.",
//       titleColor: "text-[#6E221E]", // وردي اللوجو
//       borderColor: "border-[#FFB7B2]",
//       iconBg: "bg-[#FFB7B2]/35",
//       icon: "✨",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#FAF6F0] text-gray-900 font-sans rtl selection:bg-[#FFB7B2]/40 antialiased">
      
//       {/* 1. الهيدر الاحترافي */}
//       <header className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#FFDAC1]/40 shadow-xs">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
//           {/* براند العيادة */}
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-white border-2 border-[#FFB7B2]/60 rounded-2xl p-1 flex items-center justify-center shadow-xs">
//               <img src="/logo.png" alt="Diamond Dental Centers" className="object-contain w-full h-full" />
//             </div>
//             <div>
//               <span className="font-black text-xl tracking-wider block bg-gradient-to-r from-[#1A4F6E] to-[#6E221E] bg-clip-text text-transparent">
//                 DIAMOND <span className="font-light">DENTAL</span>
//               </span>
//               <span className="text-[11px] uppercase tracking-widest font-black text-[#6B3E1E] bg-[#FFDAC1]/40 px-2 py-0.5 rounded-md inline-block mt-0.5">
//                 KIDS • قسم الأطفال
//               </span>
//             </div>
//           </div>

//           {/* زر العودة للموقع الرئيسي */}
//           <nav>
//             <a 
//               href="/" 
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#B5E2FA] text-[#1A4F6E] font-bold text-sm hover:bg-[#B5E2FA]/10 transition-all shadow-xs"
//             >
//               <span>الرئيسية</span>
//               <span className="text-xs">←</span>
//             </a>
//           </nav>

//         </div>
//       </header>

//       {/* 2. الهيرو سكشن (Hero Section) */}
//       <section className="py-16 lg:py-24 relative overflow-hidden">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-[#B5E2FA]/30 rounded-full blur-3xl -z-10"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB7B2]/20 rounded-full blur-3xl -z-10"></div>

//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* النصوص الملونة والمنظمة بشكل محترف */}
//             <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#E2F0CB] text-[#3B5219] text-xs font-black shadow-xs">
//                 ✨ رعاية طبية تخصصية بمقاييس عالمية تناسب أبطالنا
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.2]">
//                 ابتسامات صغيرة، <br />
//                 <span className="bg-gradient-to-r from-[#1A4F6E] via-[#6E221E] to-[#6B3E1E] bg-clip-text text-transparent">
//                   قلوب ومستقبل كبيـر!
//                 </span>
//               </h1>
              
//               <p className="text-gray-800 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
//                 في عيادات دايموند للأطفال، نمزج بين دقة الرعاية الطبية الفائقة والبيئة المبهجة الغنية بالألوان المريحة. نضمن لطفلك تجربة فريدة تشكل وعيه الصحي بكل إيجابية وأمان.
//               </p>
              
//               <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//                 <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6E221E] to-[#6B3E1E] text-white font-black text-lg rounded-2xl shadow-md shadow-[#6E221E]/20 hover:scale-[1.02] transition-all">
//                   احجز موعد أونلاين الآن 📅
//                 </button>
//                 <a href="#services" className="text-sm font-black text-[#1A4F6E] hover:underline decoration-2">
//                   اكتشف تخصصات الأطفال الطبيّة ↓
//                 </a>
//               </div>
//             </div>

//             {/* عرض صورة اللوجو الاحترافية */}
//             <div className="lg:col-span-5 flex justify-center">
//               <div className="w-full max-w-[385px] aspect-square bg-white rounded-3xl p-6 border-4 border-[#FFDAC1] shadow-xl shadow-gray-200/60 flex items-center justify-center relative">
//                 <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] rounded-[28px] -z-10 opacity-60 blur-xs"></div>
//                 <img 
//                   src="/image_7e2d45.jpg" 
//                   alt="Diamond Dental Centers Logo" 
//                   className="rounded-2xl object-contain w-full h-full bg-[#FAF9F6]"
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 3. سكشن الخدمات */}
//       <section id="services" className="py-20 bg-white border-t-2 border-[#FFDAC1]/30 relative">
//         <div className="max-w-7xl mx-auto px-6">
          
//           <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
//             <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
//               خدماتنا الطبية المتخصصة للأطفال
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base font-medium">
//               منظومة علاجية ووقائية متكاملة مصممة خصيصاً لتلبية احتياجات صحة فم وأسنان الأطفال من عمر عام وحتى المراهقة.
//             </p>
//             <div className="w-32 h-1.5 bg-gradient-to-r from-[#B5E2FA] via-[#FFB7B2] to-[#FFDAC1] mx-auto rounded-full"></div>
//           </div>

//           {/* شبكة الكروت */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service) => (
//               <div 
//                 key={service.id} 
//                 className={`p-8 rounded-2xl border-2 ${service.borderColor} bg-[#FAF6F0]/40 hover:bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between`}
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-6">
//                     <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center text-2xl shadow-xs`}>
//                       {service.icon}
//                     </div>
//                     <span className="text-sm font-mono font-black text-gray-400 tracking-wider">
//                       {service.id}
//                     </span>
//                   </div>

//                   <div className="space-y-1 mb-4">
//                     <h3 className={`text-xl font-black ${service.titleColor}`}>
//                       {service.title}
//                     </h3>
//                     <span className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest">
//                       {service.englishTitle}
//                     </span>
//                   </div>

//                   <p className="text-gray-950 text-sm leading-relaxed font-semibold">
//                     {service.desc}
//                   </p>
//                 </div>

//                 <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-gray-500">
//                   <span>عيادات دايموند كيدز</span>
//                   <span className="text-sm">←</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* 4. الفوتر الجديد: واجهة احترافية، ألوان اللوجو الدافئة، وداتا مكثفة ومنظمة */}
//       <footer className="bg-[#FAF6F0] text-gray-800 border-t-4 border-[#FFB7B2] pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* شبكة البيانات الكبرى للفوتر */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#FFDAC1]/60 pb-12">
            
//             {/* العمود الأول: عن البراند */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <img src="/logo.png" alt="Diamond Logo" className="w-8 h-8 object-contain" />
//                 <span className="font-black text-lg tracking-wider text-gray-950">DIAMOND KIDS</span>
//               </div>
//               <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold">
//                 نهتم بأدق تفاصيل صحة فم أطفالكم في فروعنا من خلال تقديم حلول علاجية ووقائية مخصصة تضمن زيارات دورية سعيدة وخالية تماماً من الألم والخوف.
//               </p>
//             </div>

//             {/* العمود الثاني: الخدمات التخصصية المدعومة */}
//             <div className="space-y-3">
//               <h4 className="font-black text-sm uppercase tracking-wider text-[#1A4F6E] border-r-4 border-[#B5E2FA] pr-2">
//                 تخصصات العيادة
//               </h4>
//               <ul className="text-xs sm:text-sm space-y-2 text-gray-800 font-bold">
//                 <li className="hover:text-[#1A4F6E] transition-colors cursor-pointer">• علاج عصب الأطفال الحيوي</li>
//                 <li className="hover:text-[#3B5219] transition-colors cursor-pointer">• تيجان الأسنان التجميلية للأطفال</li>
//                 <li className="hover:text-[#6B3E1E] transition-colors cursor-pointer">• تركيب حافظات المسافات الرقمية</li>
//                 <li className="hover:text-[#6E221E] transition-colors cursor-pointer">• الفحص الشامل وجلسات الوقاية</li>
//               </ul>
//             </div>

//             {/* العمود الثالث: مواعيد العمل والفروع بالتفصيل */}
//             <div className="space-y-3">
//               <h4 className="font-black text-sm uppercase tracking-wider text-[#6E221E] border-r-4 border-[#FFB7B2] pr-2">
//                 الفروع والمواعيد
//               </h4>
//               <div className="text-xs sm:text-sm space-y-2 text-gray-800 font-bold">
//                 <p>📍 <span className="text-gray-950">فرع شربين:</span> شارع المركز - بجوار مستشفى شربين العام</p>
//                 <p>📍 <span className="text-gray-950">فرع دكرنس:</span> شارع بورسعيد - برج الماس الطبي</p>
//                 <p className="text-[#6B3E1E] pt-1 text-xs font-black">⏰ نعمل يومياً من الساعة 1 ظهراً وحتى 9 مساءً (عدا الجمعة)</p>
//               </div>
//             </div>

//             {/* العمود الرابع: قنوات الاتصال والحجز السريع */}
//             <div className="space-y-4">
//               <h4 className="font-black text-sm uppercase tracking-wider text-[#6B3E1E] border-r-4 border-[#FFDAC1] pr-2">
//                 اتصل بنا الآن
//               </h4>
//               <div className="space-y-2">
//                 <a href="tel:01012345678" className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#B5E2FA] rounded-xl text-xs sm:text-sm font-mono font-black text-[#1A4F6E] shadow-xs hover:bg-[#B5E2FA]/10 transition-all">
//                   <span>📞</span> 010 1234 5678 (فرع شربين)
//                 </a>
//                 <a href="tel:01087654321" className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#FFB7B2] rounded-xl text-xs sm:text-sm font-mono font-black text-[#6E221E] shadow-xs hover:bg-[#FFB7B2]/10 transition-all">
//                   <span>📞</span> 010 8765 4321 (فرع دكرنس)
//                 </a>
//               </div>
//             </div>

//           </div>

//           {/* الحقوق والروابط القانونية الصغيرة */}
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-gray-500 gap-4">
//             <p>&copy; {new Date().getFullYear()} Diamond Dental Centers. جميع الحقوق محفوظة لعيادات الأطفال.</p>
//             <div className="flex gap-6 text-gray-600">
//               <span className="hover:text-gray-950 cursor-pointer transition-colors">سياسة الخصوصية</span>
//               <span className="hover:text-gray-950 cursor-pointer transition-colors">إرشادات أولياء الأمور</span>
//             </div>
//           </div>

//         </div>
//       </footer>

//     </div>
//   );
// }


"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden font-sans bg-gradient-to-tr from-[#E2F6F1] via-[#FFF3F8] to-[#EAE3F7]">
      
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
          className="mb-8 p-4 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(220,180,200,0.2)] border border-white/60 max-w-[280px] md:max-w-[320px]"
        >
          {/* استبدل المسار هنا بمسار صورتك في مجلد public */}
          <img 
            src="/img/logo2.jpeg" 
            alt="Diamond Dental Centers Logo" 
            className="w-full h-auto object-contain rounded-[2rem]"
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
          <h1 className="text-6xl md:text-8xl font-black tracking-widest uppercase bg-gradient-to-r from-[#7FB3D5] via-[#A569BD] to-[#F1948A] bg-clip-text text-transparent filter drop-shadow-sm font-mono">
            Soon
          </h1>
          
          <h2 className="text-[#9A7B56] text-xl md:text-2xl font-bold tracking-wide">
            DIAMOND DENTAL CENTERS
          </h2>
          
          <div className="h-[3px] w-20 bg-gradient-to-r from-[#C1A169] to-[#EAD5A7] mx-auto rounded-full my-4"></div>
          
          <p className="text-gray-500 text-base md:text-lg max-w-sm mx-auto font-medium">
            نعمل على تجهيز تجربة رقمية فريدة تليق بابتسامتكم. انتظرونا قريباً!
          </p>
        </motion.div>


      </div>
    </div>
  );
};

export default ComingSoon;