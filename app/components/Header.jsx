"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

 import React from 'react'
 
 function Header() {
  const pathname = usePathname();
  if (pathname === "/kids") {
    return null; // لا تعرض الهيدر في صفحة التعليقات
  }
   return (

       <nav className="fixed w-full z-50 bg-blue-900/0 backdrop-blur-md border-b border-[#c5a059]/20 py-3 px-10 flex justify-between items-center">
    <div className="w-14 h-14 outline-2 outline-[#c5a059] rounded-lg content-center">
      <Link href={"/"}>
              <Image
        src="/logo.png"
        alt="Diamond Dental Centers Logo"
        width={56}
        height={56}
        className="w-full h-full mx-auto rounded-lg"
      />
      
      </Link>
    </div>

    <a
      href="/#form"
      className="bg-linear-to-r from-[#c5a059] to-[#927035] cursor-pointer text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition"
    >
       احجز الان
    </a>
   
  </nav>
   )
 }
 
 export default Header
