import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Form from "./components/Form";
// import Staff from "./components/Staff";
// import Footer from "./components/Footer";
// import Comments from "./components/Comments";
import Slider from "./components/Slider";
// import Payment from "./components/Payment";

export const metadata = {
  title: 'Diamond Dental Centers - مراكز دايموند للأسنان | شربين دكرنس',
  description: 'أفضل رعاية لأسنانك في Diamond Dental Centers بشربين وبلقاس. متخصصون في زراعة وتجميل الأسنان بأحدث التقنيات. احجز موعدك الآن.',
  keywords: 'دايموند للأسنان, Diamond Dental Centers, دكتور أسنان شربين, دكتور أسنان بلقاس, زراعة أسنان, تجميل أسنان بلقاس, تقويم أسنان شربين',
  alternates: {
    canonical: 'https://www.diamond-dental-centers.com/', 
  },
};

export default function Home() {
  // 2. كود الـ Schema (البيانات المنظمة) عشان تظهر في خريطة جوجل والبحث المحلي
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Diamond Dental Centers - مراكز دايموند للأسنان",
    "image": "https://www.diamond-dental-centers.com/logo.png",
    "url": "https://www.diamond-dental-centers.com/",
    "telephone": "+201009529990", 
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "شربين- خلف المستشفى العام- اعلى ستوديو ماسبيرو",
        "addressLocality": "شربين",
        "addressRegion": "الدقهلية",
        "addressCountry": "EG"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "شارع المستشفى العام- اعلى مطعم اهل الشام",
        "addressLocality": "دكرنس ",
        "addressRegion": "الدقهلية",
        "addressCountry": "EG"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي فروع مراكز دايموند للأسنان؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لدينا فرعان مجهزان بأحدث التقنيات في محافظة الدقهلية: فرع شربين (خلف المستشفى العام) وفرع دكرنس (شارع المستشفى العام أعلى مطعم أهل الشام)."
        }
      },
      {
        "@type": "Question",
        "name": "هل يتوفر تجميل وزراعة أسنان في المركز؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نحن متخصصون في زراعة وتجميل الأسنان، تقويم الأسنان، والتركيبات الثابتة والمتحركة باستخدام أحدث الأجهزة العالمية."
        }
      }
    ]
  };

  return (
    <main className="bg-linear-to-r from-gray-900 to-black ">
      {/* حقن الـ Schema في الصفحة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* components  */}
      {/* <SplashScreen /> */}
      
      <Hero />
      <Slider/>
      <Form />
      {/* <Staff /> */}
      {/* <Comments /> */}
      {/* <Payment /> */}
      
    </main>
  );
}