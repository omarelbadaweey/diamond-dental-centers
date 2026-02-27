"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backtop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showBtn && (
        <button
          onClick={backtop}
          id="backTop"
          className="flex justify-center text-2xl items-center animate-bounce fixed bottom-6 right-6 bg-[#000000] text-[#b8a145] w-12.5 h-12.5 rounded-full shadow-lg border-3 border-[#b8a145] outline-4 outline-[#000000] transition-opacity  z-20 cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
      <footer
        dir="rtl"
        className="bg-blue-900/0 border-t border-amber-100/50 overflow-hidden backdrop-blur-3xl text-slate-300 font-sans"
      >
        <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {/* العمود الأول: الشعار وعن المركز */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                {/* استبدل رابط الصورة برابط شعار المركز الحقيقي */}
                <img
                  src="/logo.png"
                  alt="Diamond Dental Logo"
                  className="h-14  outline-2 outline-[#c5a059] w-auto object-contain rounded-md"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                في **Diamond Dental Centers**، نحرص على تقديم تجربة علاجية
                استثنائية تجمع بين الدقة الفنية وأحدث ما توصل إليه طب الأسنان
                الرقمي.
              </p>
            </div>

            {/* العمود الثاني: الخدمات */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 border-r-4 border-sky-500 pr-3">
                خدماتنا
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <span
                    href="#"
                    className="hover:text-sky-400 transition-colors duration-300"
                  >
                    ابتسامة هوليود
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="hover:text-sky-400 transition-colors duration-300"
                  >
                    زراعة الأسنان الفورية
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="hover:text-sky-400 transition-colors duration-300"
                  >
                    تقويم الأسنان (Invisalign)
                  </span>
                </li>
                <li>
                  <span
                    href="#"
                    className="hover:text-sky-400 transition-colors duration-300"
                  >
                    تبييض الأسنان بالليزر
                  </span>
                </li>
              </ul>
            </div>

            {/* العمود الثالث: التواصل */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 border-r-4 border-sky-500 pr-3">
                تواصل معنا
              </h4>
              <div className="space-y-4 text-sm leading-6">
                <p className="flex items-start gap-2">
                  <span className="text-sky-500">📍</span>
                  <span>شربين- خلف المستشفى العام- اعلى ستوديو ماسبيرو</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-500">📞</span>
                  <span dir="ltr">01009529990</span>
                </p>
                <hr />
                <p className="flex items-start gap-2">
                  <span className="text-sky-500">📍</span>
                  <span>دكرنس - شارع المستشفى العام- اعلى مطعم اهل الشام</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-500">📞</span>
                  <span dir="ltr">01015997844</span>
                </p>
              </div>
            </div>

            {/* العمود الرابع: ساعات العمل */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 border-r-4 border-sky-500 pr-3">
                ساعات العمل
              </h4>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex justify-between mb-2">
                  <span>السبت - الخميس</span>
                  <span className="text-sky-400">11ص - 11م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="text-sky-400">4ع - 10م</span>
                </div>
              </div>
            </div>
          </div>

     
          <div className="border-t text-center border-slate-800 mt-12 py-8  items-center  text-slate-500 text-lg">
            <p dir="rtl">
              © 2026
              <span className="text-[#b8a145] mx-1">
                Diamond Dental Centers
              </span>
              . جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
