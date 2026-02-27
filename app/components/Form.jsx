// // "use client";
// // import axios from "axios";
// // import { useState } from "react";
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // const BookingForm = () => {
// //   const [formData, setFormData] = useState({ 
// //     fullName: '', 
// //     phoneNumber: '', 
// //     select: '', 
// //     day: '', 
// //     time: '',
// //     doctorName: ''
// //   });
// //    const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (formData.phoneNumber.length !== 11 || !formData.phoneNumber.startsWith('01')) {
// //       return toast.error('يرجى إدخال رقم هاتف مصري صحيح (11 رقم)');
// //     }

// //         setLoading(true);
// //     // إظهار توست "جاري التحميل" (Promise Toast)
// //     const id = toast.loading("جاري تسجيل حجزك...");

// //     try {
// //       // const response = await fetch(process.env.NEXT_PUBLIC_API_DATA, {
// //       //   method: 'POST',
// //       //   headers: { 
// //       //     'Content-Type': 'application/json',
// //       //     'Accept': 'application/json' 
// //       //   },
// //       //   body: JSON.stringify(formData)
// //       // });

// //       const response = await axios.post(process.env.NEXT_PUBLIC_API_DATA, formData);
// //       const result = await response.data.data;
  
// //       if (response.ok) {
// //         toast.update(id, { 
// //           render: "تم تسجيل الحجز بنجاح! 🎉", 
// //           type: "success", 
// //           isLoading: false, 
// //           autoClose: 3000 // هيقفل بعد 3 ثواني والشريط هيكتمل
// //         });

// //         setFormData({ fullName: '', phoneNumber: '', select: '', day: '', time: '', doctorName: '' });
// //       } else {
// //         toast.update(id, { 
// //           render: result.message, 
// //           type: "error", 
// //           isLoading: false, 
// //           autoClose: 3000 
// //         });
// //       }
// //     } catch (error) {
// //       toast.update(id, { 
// //         render: "فشل الاتصال بالسيرفر، تواصل معنا واتساب", 
// //         type: "error", 
// //         isLoading: false, 
// //         autoClose: 3000 
// //       });
// //       console.log(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //     }
  

// //   return (
// //     <section className="pb-14 relative overflow-hidden px-4" dir="rtl">
// //       <ToastContainer rtl={true} position="top-right" theme="dark" />
// //       <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

// //       <div className="max-w-4xl mx-auto border border-[#c5a059]/90 p-10 rounded-lg shadow-xl bg-black/20 backdrop-blur-sm">
// //         <h2 className="text-[#c5a059] text-3xl mb-8 text-center font-serif">احجز موعدك الآن</h2>
        
// //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
// //           {/* //// */}
// //           <input 
// //             required
// //             className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition"
// //             placeholder="الأسم الكامل" 
// //             value={formData.fullName}
// //             onChange={(e) => setFormData({...formData, fullName: e.target.value})}
// //           />
          
// //           {/* //// */}
// //           <input 
// //             required
// //             type="tel"
// //             className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition"
// //             placeholder="رقم الهاتف (11 رقم)" 
// //             value={formData.phoneNumber}
// //             onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
// //           />

// //           {/* ///// */}
// //           <select 
// //             required
// //             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none"
// //             value={formData.day}
// //             onChange={(e) => setFormData({...formData, day: e.target.value})}
// //           >
// //             <option value="" hidden>اختر اليوم</option>
// //             <option>السبت</option>
// //             <option>الأحد</option>
// //             <option>الاثنين</option>
// //             <option>الثلاثاء</option>
// //             <option>الأربعاء</option>
// //             <option>الخميس</option>
// //           </select>

// //           {/* ////// */}
// //           <select 
// //             required
// //             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none"
// //             value={formData.time}
// //             onChange={(e) => setFormData({...formData, time: e.target.value})}
// //           >
// //             <option value="" hidden>اختر الساعة</option>
// //             <option>11:00 صباحا</option>
// //             <option>12:00 صباحا</option>
// //             <option>01:00 مساءً</option>
// //             <option>02:00 مساءً</option>
// //             <option>03:00 مساءً</option>
// //             <option>04:00 مساءً</option>
// //             <option>05:00 مساءً</option>
// //             <option>06:00 مساءً</option>
// //             <option>07:00 مساءً</option>
// //             <option>08:00 مساءً</option>
// //             <option>09:00 مساءً</option>
// //             <option>10:00 مساءً</option>
// //             <option>11:00 مساءً</option>
// //           </select>

// //           {/* ///// */}
// //           <select 
// //             required
// //             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
// //             value={formData.doctorName}
// //             onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
// //           >
// //             <option value="" hidden>اختر الطبيب </option>
// //             <option>د. عبد المنعم سمير</option>
// //             <option>د. محمد عبد الحميد</option>
// //             <option>د. محمد القلا</option>
// //             <option>د. مؤمن جابر</option>
// //             <option>د. احمد خليفة</option>
// //             <option>د. اسلام على طلاب</option>
// //             <option>د. سامح ياسين</option>
// //             <option>د. محمد مختار</option>
// //             <option>د. بسمه ايمن</option>
// //           </select>

// //         {/* ////// */}
// //           <select 
// //             required
// //             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
// //             value={formData.select}
// //             onChange={(e) => setFormData({...formData, select: e.target.value})}
// //           >
// //             <option value="" hidden>اختر الخدمة</option>
// //             <option>تبييض أسنان</option>
// //             <option>زراعة أسنان</option>
// //             <option>هوليود سمايل</option>
// //           </select>

// //           <button disabled={loading} type="submit" className="cursor-pointer md:col-span-2 bg-[#c5a059] text-black font-bold py-4 mt-4 hover:bg-[#b08d48] transition uppercase tracking-widest">
// //            {loading ? 'جاري الإرسال...' : 'تأكيد الحجز والإرسال'}
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );

// //   };
// // export default BookingForm;


// "use client";
// import axios from "axios";
// import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BookingForm = () => {
//   const [formData, setFormData] = useState({ 
//     fullName: '', 
//     phoneNumber: '', 
//     select: '', 
//     day: '', 
//     time: '',
//     doctorName: ''
//   });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // التحقق من رقم الهاتف
//     if (formData.phoneNumber.length !== 11 || !formData.phoneNumber.startsWith('01')) {
//       return toast.error('يرجى إدخال رقم هاتف مصري صحيح (11 رقم)');
//     }

//     setLoading(true);
//     const id = toast.loading("جاري تسجيل حجزك في Diamond Clinic...");

//     try {
//       // إرسال البيانات باستخدام axios
//       // تأكد أن المتغير في الـ .env اسمه NEXT_PUBLIC_API_DATA
//       const response = await axios.post(process.env.NEXT_PUBLIC_API_DATA, formData);

//       // axios بيدخل هنا فقط لو الـ Status Code هو 200 أو 201 (نجاح)
//       toast.update(id, { 
//         render: "تم تسجيل الحجز بنجاح! 🎉", 
//         type: "success", 
//         isLoading: false, 
//         autoClose: 3000 
//       });

//       // تصغير الفورم بعد النجاح
//       setFormData({ fullName: '', phoneNumber: '', select: '', day: '', time: '', doctorName: '' });

//     } catch (error) {
//       // axios بيدخل هنا لو السيرفر رجع 400 أو 500 أو حصل فشل اتصال
//       console.error("خطأ في الإرسال:", error);

//       // محاولة قراءة رسالة الخطأ من السيرفر لو موجودة، وإلا رسالة افتراضية
//       const serverMessage = error.response?.data?.message || "فشل الاتصال بالسيرفر، تواصل معنا واتساب";

//       toast.update(id, { 
//         render: serverMessage, 
//         type: "error", 
//         isLoading: false, 
//         autoClose: 3000 
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="pb-14 relative overflow-hidden px-4" dir="rtl">
//       <ToastContainer rtl={true} position="top-right" theme="dark" />
      
//       {/* الخلفية الجمالية */}
//       <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

//       <div className="max-w-4xl mx-auto border border-[#c5a059]/90 p-10 rounded-lg shadow-xl bg-black/20 backdrop-blur-sm">
//         <h2 className="text-[#c5a059] text-3xl mb-8 text-center font-serif">احجز موعدك في مراكز دايموند</h2>
        
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
//           <input 
//             required
//             className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition placeholder:text-gray-500"
//             placeholder="الأسم الكامل" 
//             value={formData.fullName}
//             onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//           />
          
//           <input 
//             required
//             type="tel"
//             className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition placeholder:text-gray-500"
//             placeholder="رقم الهاتف (11 رقم)" 
//             value={formData.phoneNumber}
//             onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
//           />

//           <select 
//             required
//             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none cursor-pointer"
//             value={formData.day}
//             onChange={(e) => setFormData({...formData, day: e.target.value})}
//           >
//             <option value="" hidden>اختر اليوم</option>
//             {["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"].map(day => (
//               <option key={day} value={day}>{day}</option>
//             ))}
//           </select>

//           <select 
//             required
//             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none cursor-pointer"
//             value={formData.time}
//             onChange={(e) => setFormData({...formData, time: e.target.value})}
//           >
//             <option value="" hidden>اختر الساعة</option>
//             <option>11:00 صباحاً</option>
//             <option>01:00 مساءً</option>
//             <option>03:00 مساءً</option>
//             <option>05:00 مساءً</option>
//             <option>07:00 مساءً</option>
//             <option>09:00 مساءً</option>
//           </select>

//           <select 
//             required
//             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none cursor-pointer"
//             value={formData.doctorName}
//             onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
//           >
//             <option value="" hidden>اختر الطبيب (شربين - بلقاس)</option>
//             <option>د. عبد المنعم سمير</option>
//             <option>د. محمد عبد الحميد</option>
//             <option>د. محمد القلا</option>
//             <option>د. بسمه ايمن</option>
//           </select>

//           <select 
//             required
//             className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none cursor-pointer"
//             value={formData.select}
//             onChange={(e) => setFormData({...formData, select: e.target.value})}
//           >
//             <option value="" hidden>اختر الخدمة</option>
//             <option>تبييض أسنان</option>
//             <option>زراعة أسنان</option>
//             <option>هوليود سمايل</option>
//             <option>تقويم أسنان</option>
//           </select>

//           <button 
//             disabled={loading} 
//             type="submit" 
//             className="cursor-pointer md:col-span-2 bg-[#c5a059] text-black font-bold py-4 mt-4 hover:bg-[#b08d48] transition uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? 'جاري تسجيل بياناتك...' : 'تأكيد الحجز الآن'}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;

"use client";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({ 
    fullName: '', 
    phoneNumber: '', 
    select: '', 
    day: '', 
    time: '',
    doctorName: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // فحص رقم الهاتف المصري
    if (formData.phoneNumber.length !== 11 || !formData.phoneNumber.startsWith('01')) {
      return toast.error('يرجى إدخال رقم هاتف مصري صحيح (11 رقم)');
    }

    setLoading(true);
    const id = toast.loading("جاري تسجيل حجزك في Diamond Centers...");

    try {
      // إرسال البيانات (تأكد من وجود NEXT_PUBLIC_ قبل اسم المتغير في .env)
      const response = await axios.post("https://diamond-back-nu.vercel.app/api/data", formData);

      // في axios: الوصول لهنا يعني نجاح العملية (Status 2xx)
      toast.update(id, { 
        render: "تم تسجيل الحجز بنجاح! 🎉", 
        type: "success", 
        isLoading: false, 
        autoClose: 3000 
      });

      // تصغير الفورم
      setFormData({ fullName: '', phoneNumber: '', select: '', day: '', time: '', doctorName: '' });

    } catch (error) {
      console.error("Axios Error:", error);
      
      // قراءة رسالة الخطأ من السيرفر أو عرض رسالة افتراضية
      const errorMsg = error.response?.data?.message || "فشل الاتصال بالسيرفر، تواصل معنا واتساب";
      
      toast.update(id, { 
        render: errorMsg, 
        type: "error", 
        isLoading: false, 
        autoClose: 3000 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-14 relative overflow-hidden px-4" dir="rtl">
      <ToastContainer rtl={true} position="top-right" theme="dark" />
      
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="max-w-4xl mx-auto border border-[#c5a059]/90 p-10 rounded-lg shadow-xl bg-black/20 backdrop-blur-sm">
        <h2 className="text-[#c5a059] text-3xl mb-8 text-center font-serif">احجز موعدك الآن</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <input 
            required
            className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition placeholder:text-gray-400"
            placeholder="الأسم الكامل" 
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
          
          <input 
            required
            type="tel"
            className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition placeholder:text-gray-400"
            placeholder="رقم الهاتف (11 رقم)" 
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
          />

          <select 
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none"
            value={formData.day}
            onChange={(e) => setFormData({...formData, day: e.target.value})}
          >
            <option value="" hidden>اختر اليوم</option>
            <option>السبت</option>
            <option>الأحد</option>
            <option>الاثنين</option>
            <option>الثلاثاء</option>
            <option>الأربعاء</option>
            <option>الخميس</option>
          </select>

          <select 
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          >
            <option value="" hidden>اختر الساعة</option>
            <option>11:00 صباحا</option>
            <option>12:00 صباحا</option>
            <option>01:00 مساءً</option>
            <option>02:00 مساءً</option>
            <option>03:00 مساءً</option>
            <option>04:00 مساءً</option>
            <option>05:00 مساءً</option>
            <option>06:00 مساءً</option>
            <option>07:00 مساءً</option>
            <option>08:00 مساءً</option>
            <option>09:00 مساءً</option>
            <option>10:00 مساءً</option>
            <option>11:00 مساءً</option>
          </select>

          {/* قائمة الأطباء الكاملة كما طلبت */}
          <select 
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
            value={formData.doctorName}
            onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
          >
            <option value="" hidden>اختر الطبيب</option>
            <option>د. عبد المنعم سمير</option>
            <option>د. محمد عبد الحميد</option>
            <option>د. محمد القلا</option>
            <option>د. مؤمن جابر</option>
            <option>د. احمد خليفة</option>
            <option>د. اسلام على تعلب</option>
            <option>د. سامح ياسين</option>
            <option>د. محمد مختار</option>
            <option>د. بسمه ايمن</option>
          </select>

          <select 
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
            value={formData.select}
            onChange={(e) => setFormData({...formData, select: e.target.value})}
          >
            <option value="" hidden>اختر الخدمة</option>
            <option>تبييض أسنان</option>
            <option>زراعة أسنان</option>
            <option>هوليود سمايل</option>
            <option>تقويم أسنان</option>
            <option>حشو عصب</option>
            <option>تنظيف جير</option>
          </select>

          <button 
            disabled={loading} 
            type="submit" 
            className="cursor-pointer md:col-span-2 bg-[#c5a059] text-black font-bold py-4 mt-4 hover:bg-[#b08d48] transition uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? 'جاري تسجيل بياناتك...' : 'تأكيد الحجز والإرسال'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;