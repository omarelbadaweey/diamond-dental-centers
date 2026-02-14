import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });

  const sendToWhatsapp = (e) => {
    e.preventDefault();
    const message = `مرحباً، أريد حجز موعد:%0aالأسم: ${formData.name}%0aالموبايل: ${formData.phone}%0aالخدمة: ${formData.service}`;
    window.open(`https://wa.me/201009529990?text=${message}`, '_blank');
  };

  return (
    <section className="pb-14 relative overflow-hidden  px-4" dir="rtl">
             <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="max-w-4xl mx-auto border border-[#c5a059]/50 p-10 rounded-lg">
        <h2 className="text-[#c5a059] text-3xl mb-8 text-center font-serif">احجز استشارتك المجانية</h2>
        <form onSubmit={sendToWhatsapp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition"
            placeholder="الأسم الكامل" 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition"
            placeholder="رقم الهاتف" 
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <select 
            className="border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option hidden>اختر الخدمة</option>
            <option  className="bg-black">تبييض أسنان</option>
            <option  className="bg-black">زراعة أسنان</option>
            <option  className="bg-black">هوليود سمايل</option>
          </select>
          <button type="submit" className="md:col-span-2 bg-[#c5a059] text-black font-bold py-4 mt-4 hover:bg-[#b08d48] transition uppercase tracking-widest">إرسال عبر واتساب</button>
        </form>
      </div>
    </section>
  );
};
export default BookingForm;