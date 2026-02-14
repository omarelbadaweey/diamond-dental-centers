const Navbar = () => (
  <nav className="fixed w-full z-50 bg-blue-900/0 backdrop-blur-md border-b border-[#c5a059]/20 py-5 px-10 flex justify-between items-center">
    <img src="/logo.png" className="w-10 h-10 object-cover scale-[2.5]" alt="" />

    <a href="https://wa.me/201009529990" className="bg-gradient-to-r from-[#c5a059] to-[#927035] cursor-pointer text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition">احجز الآن</a>
  </nav>
);
export default Navbar;