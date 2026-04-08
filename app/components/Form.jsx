"use client";

import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    select: "",
    day: "",
    time: "",
    doctorName: "",
    branch: "", // الحقل الجديد
  });
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // فحص رقم الهاتف المصري
  //   if (formData.phoneNumber.length !== 11 || !formData.phoneNumber.startsWith('01')) {
  //     return toast.error('يرجى إدخال رقم هاتف مصري صحيح (11 رقم)');
  //   }

  //   setLoading(true);
  //   const id = toast.loading("جاري تسجيل حجزك في Diamond Centers...");

  //   try {

  //     const response = await axios.post("http://localhost:5000/api/data", formData);

  //     // في axios: الوصول لهنا يعني نجاح العملية (Status 2xx)
  //     toast.update(id, {
  //       render: "تم تسجيل الحجز بنجاح! 🎉",
  //       type: "success",
  //       isLoading: false,
  //       autoClose: 3000
  //     });

  //     // تصغير الفورم
  //     setFormData({ fullName: '', phoneNumber: '', select: '', day: '', time: '', doctorName: '', branch: '' });

  //   } catch (error) {
  //     console.error("Axios Error:", error);

  //     // قراءة رسالة الخطأ من السيرفر أو عرض رسالة افتراضية
  //     const errorMsg = error.response?.data?.message || "فشل الاتصال بالسيرفر، تواصل معنا واتساب";

  //     toast.update(id, {
  //       render: errorMsg,
  //       type: "error",
  //       isLoading: false,
  //       autoClose: 3000
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (formData.phoneNumber.length !== 11 || !formData.phoneNumber.startsWith('01')) {
  //       return toast.error('يرجى إدخال رقم هاتف مصري صحيح (11 رقم)');
  //     }

  //     setLoading(true);
  //     // تأكد إن الـ id متخزن صح
  //     const toastId = toast.loading("جاري تسجيل حجزك في Diamond Centers...");

  //     try {
  // const toastId = toast.loading("جاري تسجيل حجزك في Diamond Centers...");

  // try {
  //   await axios.post("http://localhost:5000/api/data", formData);

  //   toast.dismiss(toastId); // اقفل القديم

  //   toast.success("تم تسجيل الحجز بنجاح! 🎉", {
  //     autoClose: 3000
  //   });

  // } catch (error) {
  //   const errorMsg = error.response?.data?.message || "فشل الاتصال بالسيرفر";

  //   toast.dismiss(toastId); // اقفل القديم برضه

  //   toast.error(errorMsg, {
  //     autoClose: 3000
  //   });
  // }

  //       setFormData({ fullName: '', phoneNumber: '', select: '', day: '', time: '', doctorName: '', branch: '' });

  //     } catch (error) {
  //       console.error("Axios Error:", error);
  //       const errorMsg = error.response?.data?.message || "فشل الاتصال بالسيرفر، تواصل معنا واتساب";

  //       // الحل الجذري هنا:
  //       toast.update(toastId, {
  //         render: errorMsg,
  //         type: "error", // تغيير النوع لـ Error بيشيل الـ Spinner تلقائياً في معظم الإصدارات
  //         isLoading: false, // تأكيد غلق الـ Loading
  //         autoClose: 3000,
  //         closeOnClick: true,
  //         closeButton: true
  //       });

  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.phoneNumber.length !== 11 ||
      !formData.phoneNumber.startsWith("01")
    ) {
      return toast.error("يرجى إدخال رقم هاتف مصري صحيح (11 رقم)");
    }

    setLoading(true);

    const toastId = toast.loading("جاري تسجيل حجزك في Diamond Centers...");

    try {
      await axios.post("https://diamond-back-nu.vercel.app/api/data", formData);

      toast.dismiss(toastId);

      toast.success("تم تسجيل الحجز بنجاح! 🎉", {
        autoClose: 3000,
      });

      setFormData({
        fullName: "",
        phoneNumber: "",
        select: "",
        day: "",
        time: "",
        doctorName: "",
        branch: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "فشل الاتصال بالسيرفر";

      toast.dismiss(toastId);

      toast.error(errorMsg, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="form"
      className="pb-14 relative overflow-hidden px-4"
      dir="rtl"
    >

      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="max-w-4xl mx-auto border border-[#c5a059]/90 p-10 rounded-lg shadow-xl bg-black/20 backdrop-blur-sm">
        <h2 className="text-[#c5a059] text-3xl mb-8 text-center font-serif">
          احجز موعدك الآن
        </h2>
        {/* <p className="text-red-500 text-[12px] text-center -mt-7 border border-t-transparent mb-3 w-fit mx-auto border-white ">ملحوطه الحجز بشكل اسبوعى ف حاله الحجز ف الاسبوع القادم تواصل معنا</p> */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            required
            className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition placeholder:text-gray-400"
            placeholder="الأسم الكامل - (اجبارى)"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />

          <input
            required
            type="tel"
            className="bg-transparent border-b border-[#c5a059] p-2 text-white outline-none focus:border-white transition placeholder:text-gray-400"
            placeholder="رقم الهاتف (11 رقم)  -  (اجبارى) "
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />

          <select
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none"
            value={formData.day}
            onChange={(e) => setFormData({ ...formData, day: e.target.value })}
          >
            <option value="" hidden>
              اختر اليوم
            </option>
            <option>السبت</option>
            <option>الأحد</option>
            <option>الاثنين</option>
            <option>الثلاثاء</option>
            <option>الأربعاء</option>
            <option>الخميس</option>
            <option>الجمعه</option>
          </select>

          <select
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] outline-none"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            <option value="" hidden>
              اختر الساعة - (اجبارى)
            </option>
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

          {/* قائمة الأطباء الكاملة   */}
          <select
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
            value={formData.doctorName}
            onChange={(e) =>
              setFormData({ ...formData, doctorName: e.target.value })
            }
          >
            <option value="" hidden>
                اختر الطبيب - (اختيارى)  
            </option>
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
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
            value={formData.select}
            onChange={(e) =>
              setFormData({ ...formData, select: e.target.value })
            }
          >
            <option value="" hidden>
                اختر الخدمة - (اختيارى)  
            </option>
            <option>كشف</option>
            <option>متابعه</option>
            <option>ازاله جير</option>
            <option>حشو عادى</option>
            <option>حشو عصب</option>
            <option> تركيبات</option>
            <option> تقويم</option>
            <option> زراعه</option>
            <option> خلع</option>
            <option>تبييض بالليزر</option>
            <option>حشو اطفال</option>
          </select>

          <select
            required
            className="bg-black border-b border-[#c5a059] p-2 text-[#c5a059] md:col-span-2 outline-none"
            value={formData.branch}
            onChange={(e) =>
              setFormData({ ...formData, branch: e.target.value })
            }
          >
            <option value="" hidden>
              اختر الفرع - (اجبارى)
            </option>
            <option value="شربين">شربين</option>
            <option value="دكرنس">دكرنس</option>
          </select>

          <button
            disabled={loading}
            type="submit"
            className="cursor-pointer md:col-span-2 bg-[#c5a059] text-black font-bold py-4 mt-4 hover:bg-[#b08d48] transition uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? "جاري تسجيل بياناتك..." : "تأكيد الحجز والإرسال"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
