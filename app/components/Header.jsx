import Image from "next/image";

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-blue-900/0 backdrop-blur-md border-b border-[#c5a059]/20 py-3 px-10 flex justify-between items-center">
    <div className="w-14 h-14 outline-2 outline-[#c5a059] rounded-lg content-center">
      <Image
        src="/logo.png"
        alt="Diamond Dental Centers Logo"
        width={56}
        height={56}
        className="w-full h-full mx-auto rounded-lg"
      />
    </div>

    <a
      href="https://wa.me/201009529990"
      className="bg-linear-to-r from-[#c5a059] to-[#927035] cursor-pointer text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition"
    >
      تواصل للحجز
    </a>
   
  </nav>
);
export default Navbar;
