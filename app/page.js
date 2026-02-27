import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Staff from "./components/Staff";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Diamond Dental Centers - مراكز دايموند للأسنان | شربين وبلقاس',
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

  return (
    <main >
      {/* حقن الـ Schema في الصفحة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* الكومبوننتس بتاعتك */}
      <SplashScreen />
      <Header />
      <Hero />
      <Form />
      <Staff />
      <Footer />
    </main>
  );
}