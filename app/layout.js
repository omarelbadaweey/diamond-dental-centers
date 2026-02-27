import "./globals.css";
import { Cairo } from "next/font/google"; 

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: 'Diamond Dental Centers - مراكز دايموند للأسنان | شربين ودكرنس',
    template: '%s | مراكز دايموند' 
  },
  description: 'احصل على أفضل رعاية لأسنانك في Diamond Dental Centers بشربين ودكرنس. متخصصون في زراعة وتجميل الأسنان بأحدث التقنيات العالمية. احجز موعدك الآن.',
  keywords: 'Diamond Dental Centers, مراكز دايموند للأسنان, دكتور أسنان شربين, دكتور أسنان دكرنس, زراعة أسنان شربين, تجميل أسنان دكرنس, عيادة أسنان الدقهلية',
  
  icons: {
    icon: '/logo.png', 
    shortcut: '/logo.png', 
    apple: '/logo.png', 
  },

  alternates: {
    canonical: 'https://www.diamond-dental-centers.com/',
  },

  openGraph: {
    title: 'Diamond Dental Centers - فروعنا في شربين ودكرنس',
    description: 'ابتسامتكم هي شغفنا. رعاية طبية متكاملة لأسنانكم في مراكز دايموند.',
    url: 'https://www.diamond-dental-centers.com/',
    siteName: 'Diamond Dental Centers',
    images: [
      {
        url: '/og-diamond-dental.jpg', 
        width: 1200,
        height: 630,
        alt: 'Diamond Dental Centers Logo',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Dental Centers',
    description: 'نخبة من الأطباء في خدمتك بشربين ودكرنس',
    images: ['/og-diamond-dental.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}