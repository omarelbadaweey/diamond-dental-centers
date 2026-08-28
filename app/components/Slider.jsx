"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Play, Pause, ChevronLeft, ChevronRight, Maximize } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  const [playingId, setPlayingId] = useState(null);
  const swiperRef = useRef(null);
  const videoRefs = useRef({});

  const categories = [
    { id: 1, video: "/video/vid-1.mp4", poster: "/img/post-1.jpeg" },
    { id: 2, video: "/video/vid-2.mp4", poster: "/img/post-2.jpeg" },
    { id: 3, video: "/video/vid-3.mp4", poster: "/img/post-3.jpeg" },
    { id: 4, video: "/video/vid-4.mp4", poster: "/img/post-4.jpeg" },
    { id: 5, video: "/video/vid-5.mp4", poster: "/img/post-5.jpeg" },
  ];

  const handleTogglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
      swiperRef.current?.autoplay.start();
    } else {
      Object.values(videoRefs.current).forEach((v) => {
        if (v && v !== video) {
          v.pause();
          v.currentTime = 0;
        }
      });

      video.play();
      setPlayingId(id);
      swiperRef.current?.autoplay.stop();

      // لما الفيديو يخلص يرجع السلايدر
      video.onended = () => {
        setPlayingId(null);
        swiperRef.current?.autoplay.start();
      };
    }
  };

  const handleFullscreen = (e, id) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    // iPhone Safari
    if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
    // باقي المتصفحات
    else if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  // تنظيف عند الخروج
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((v) => v?.pause());
    };
  }, []);

  return (
    <section className="relative py-15 text-white overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full md:w-[90%] mx-auto border border-[#c5a059]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.1)] relative group/container">

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1200}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            className="w-full"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div
                  className="relative w-full h-87.5 md:h-125 cursor-pointer group"
                  onClick={() => handleTogglePlay(category.id)}
                >

                  <video
                    ref={(el) => (videoRefs.current[category.id] = el)}
                    poster={category.poster}
                    preload="metadata"
                    playsInline
                    
                    className="w-full h-full  bg-black"
                  >
                    <source src={category.video} type="video/mp4" />
                  </video>

                  {/* زرار Play/Pause */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                      {playingId === category.id ? (
                        <Pause size={40} className="text-[#c5a059] fill-[#c5a059]" />
                      ) : (
                        <Play size={40} className="text-[#c5a059] fill-[#c5a059] ml-2" />
                      )}
                    </div>
                  </div>

                  {/* زرار Fullscreen */}
                  <button
                    onClick={(e) => handleFullscreen(e, category.id)}
                    className="cursor-pointer absolute bottom-6 right-6 z-30 p-2 bg-black/50 border border-[#c5a059]/30 rounded-lg text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all"
                  >
                    <Maximize size={20} />
                  </button>

                  {/* اللوجو */}
                  <div className="absolute top-6 left-6 w-16 h-16 md:w-22 md:h-22 border-2 border-[#c5a059]/50 rounded-full overflow-hidden bg-white/5 backdrop-blur-md flex items-center justify-center p-2 shadow-xl pointer-events-none">
                    <img src="/logo.png" className="w-full h-full scale-140 md:scale-120 object-contain" alt="logo" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التنقل */}
          <button className="custom-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#c5a059]/50 bg-black/40 flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all">
            <ChevronLeft size={24} />
          </button>

          <button className="custom-button-next absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#c5a059]/50 bg-black/40 flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all">
            <ChevronRight size={24} />
          </button>

        </div>
      </div>
    </section>
  );
}

export default Slider;