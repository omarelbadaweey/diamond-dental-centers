"use client";
import { useEffect, useState } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        return;
    }

    // Register simple SW for PWA
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(err => {
            console.log("SW Registration failed: ", err);
        });
    }

    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    }
  };

  const handleClose = () => {
      setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-9999 bg-linear-to-r from-[#1a1a1a] to-[#0a0a0a] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(197,160,89,0.2)] border border-[#c5a059] flex items-center justify-between gap-4 max-w-sm mx-auto md:mx-0 animate-bounce" 
      dir="rtl"
    >
      <div className="flex flex-col">
        <span className="font-bold text-[#f1d592] text-lg">تطبيق العيادة متاح!</span>
        <span className="text-xs text-gray-400">حمله للوصول السريع بدون إنترنت</span>
      </div>
      <div className="flex items-center gap-2">
          <button 
            onClick={handleInstallClick}
            className="flex items-center gap-2 bg-[#c5a059] text-black px-3 py-2 rounded-xl font-bold hover:bg-[#b08d48] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a059] shadow-lg"
          >
            <FiDownload /> تنزيل
          </button>
          <button 
            onClick={handleClose} 
            className="text-gray-500 hover:text-white transition-colors p-1 text-xl cursor-pointer"
            aria-label="إغلاق"
          >
            <FiX />
          </button>
      </div>
    </div>
  );
}
