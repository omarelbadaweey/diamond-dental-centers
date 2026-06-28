
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MessageSquare, Send, User, Mail, Quote } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ email: '', message: '', name: '' });
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      const response = await axios.get("https://diamond-back-nu.vercel.app/api/comment");
      setComments(response.data);
    } catch (error) {
      console.error("خطأ في جلب التعليقات:", error);
    }
  };

  useEffect(() => {
    fetchComments();
    const interval = setInterval(() => {
      fetchComments();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://diamond-back-nu.vercel.app/api/comment", {
        fullName: formData.name,
        email: formData.email,
        message: formData.message
      });

      if (res.data) {
        setFormData({ email: '', message: '', name: '' });
        fetchComments();
        toast.success("تم إضافة رأيك بنجاح");
      }
    } catch (error) {
      const serverMsg = error.response?.data?.message || "عذراً، فشل إرسال التعليق";
      toast.error(serverMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-34 font-sans text-white" dir="rtl" id='comments'>
      {/* <ToastContainer rtl={true} position="top-right" theme="dark" /> */}
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* فورم إضافة تعليق - التصميم الذهبي */}
        <div className="lg:col-span-1 bg-[#0a0a0a]/70 p-8 rounded-3xl shadow-2xl h-fit border border-[#c5a059]/70 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#c5a059]/5 blur-3xl rounded-full -mr-10 -mt-10"></div>
          
          <h3 className="text-2xl font-black text-[#c5a059] mb-8 flex items-center gap-2">
             أضف رأيك
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-200 flex items-center gap-2 uppercase tracking-widest">
                <User size={14} className="text-[#c5a059]" /> الاسم بالكامل
              </label>
              <input 
                required
                className="w-full p-3 bg-black/50 rounded-xl border border-[#c5a059]/20 focus:border-[#c5a059] text-white outline-none transition-all placeholder:text-gray-600"
                placeholder="أدخل اسمك هنا..."
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-200 flex items-center gap-2 uppercase tracking-widest">
                <Mail size={14} className="text-[#c5a059]" /> البريد الإلكتروني
              </label>
              <input 
                type="email" required
                className="w-full p-3 bg-black/50 rounded-xl border border-[#c5a059]/20 focus:border-[#c5a059] text-white outline-none transition-all placeholder:text-gray-600"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-200 flex items-center gap-2 uppercase tracking-widest">
                <MessageSquare size={14} className="text-[#c5a059]" /> رسالتك
              </label>
              <textarea 
                required rows="3"
                className="w-full p-3 bg-black/50 rounded-xl border border-[#c5a059]/20 focus:border-[#c5a059] text-white outline-none transition-all resize-none placeholder:text-gray-600"
                placeholder="اكتب تجربتك مع المركز..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className="w-full cursor-pointer bg-linear-to-r from-[#c5a059] to-[#967a42] text-black py-4 rounded-xl font-black hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-[0_4px_20px_rgba(197,160,89,0.2)]"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال التعليق'} 
              <Send size={18} className="rotate-180" />
            </button>
          </form>
        </div>

        {/* عرض التعليقات - نظام البطاقات الفاخرة */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-end border-b border-[#c5a059]/20 pb-4">
            <div>
              <h3 className="text-4xl font-black text-white">آراء العملاء</h3>
              <p className="text-[#c5a059] text-sm mt-2">نعتز بثقتكم في خدماتنا</p>
            </div>
            <span className="bg-[#c5a059]/10 text-[#c5a059] px-4 py-1 rounded-full text-sm font-bold border border-[#c5a059]/20">
              {comments.length} تعليق
            </span>
          </div>
          


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-162.5 overflow-y-auto p-4 custom-scrollbar">
  {comments.length === 0 ? (
    <div className="col-span-full py-20 text-center border-2 border-dashed border-[#c5a059]/20 rounded-3xl">
      <p className="text-gray-500 italic text-lg">لا توجد آراء منشورة بعد، كن الأول!</p>
    </div>
  ) : (
    comments.map((c, index) => (
      <div
        key={c._id}
        // الكارد نفسه ثابت، لكن أضفنا overflow-hidden و relative لخدع الألوان
        className="group relative bg-[#0a0a0a] p-8 rounded-4xl border  border-[#c5a059]/80 transition-all duration-500 shadow-2xl overflow-hidden isolation-auto"
      >
        
        {/* 1. التوهج الخلفي التلقائي (Auto-Glow Effect) */}
        {/* هذا العنصر يتحرك ويكبر ويصغر خلف المحتوى تلقائياً */}
        <motion.div
          className="absolute -inset-20 bg-[radial-gradient(circle_at_center,#c5a059/10,transparent_70%)] opacity-70 z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7 // تفاوت التوقيت بين الكروت
          }}
        />

        {/* 2. تأثير الألوان المتدرجة المتحركة على الحدود (تلقائي) */}
        {/* نستخدم element إضافي لعمل تأثير الـ Gradient Border المتحرك */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(120deg, transparent 30%, #c5a059/10 50%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0%", "-200% 0%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: index * 1 // تفاوت التوقيت
          }}
        />

        {/* أيقونة الكوت ثابتة ولكن تتفاعل مع الهوفر */}
        <Quote 
          className="absolute -top-2 -right-2 text-[#c5a059]/30 transition-all duration-500 rotate-12 z-10" 
          size={80} 
        />

        {/* محتوى الكارد (Z-index لضمان ظهوره فوق الألوان) */}
        <div className="relative z-20">
          <div className="flex items-center gap-5 mb-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-14 h-14 bg-linear-to-br from-[#c5a059] to-[#8a6d35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                <span className="text-black font-black text-xl uppercase">
                  {c.fullName ? c.fullName.charAt(0) : 'U'}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#c5a059] transition-colors duration-300">
                {c.fullName}
              </h4>
              <div className="flex items-center gap-2">
                 <span className="text-[11px] font-medium text-gray-100 tracking-wider">
                  {new Date(c.createdAt).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long' })}
                </span>
              </div>
            </div>
          </div>

          {/* محتوى الرسالة */}
          <div className="relative">
            <p className=" text-sm md:text-base leading-relaxed  text-gray-200 transition-colors duration-300">
              {c.message}
            </p>
          </div>
        </div>

      </div>
    ))
  )}
</div>



        </div>

      </div>

      {/* استايل الـ Scrollbar عشان ميبوظش شكل التصميم */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050505;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c5a05933;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c5a059;
        }
      `}</style>
    </section>
  );
};

export default Reviews;