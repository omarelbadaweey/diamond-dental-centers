const Staff = () => {
  const doctors = [
    { name: "د. محمد عبد الحميد",  img: "/img/dr1.jpg" },
    { name: "د. محمد القلا", img: "/img/dr2.jpg" },
    { name: "د. مؤمن جابر", img: "/img/dr3.jpg" },
    { name: "د. عبد المنعم سمير", img: "/img/dr4.jpg" },
    { name: "د. احمد خليفة", img: "/img/dr5.jpg" },
    { name: "د. اسلام على طلاب", img: "/img/dr6.jpg" },
    { name: "د. سامح ياسين", img: "/img/dr7.jpg" },
    { name: "د. محمد مختار", img: "/img/dr8.jpg" },
    { name: "د. بسمه ايمن", img: "/img/dr9.jpg" },
  ];

//   spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
// spec: "أخصائية تقويم الأسنان", 
  return (
    <section className=" pb-10">
      <h2 className="text-center text-[#c5a059] text-4xl mb-2 font-serif">نخبة الأطباء</h2>
      <div className="h-1 w-32 bg-[#b8a145] mx-auto mb-16 rounded-full"></div>
      <div className="flex flex-wrap justify-center gap-10">
        {doctors.map((doc, i) => (
          <div key={i} className="group relative w-72 h-96 overflow-hidden border border-[#c5a059]/30">
            <div className="absolute inset-0  group transition duration-500"></div>
            <img src={doc.img} alt={doc.name} className="w-full object-cover group-hover:scale-110 group-hover:-translate-4 h-full transition duration-500" />
            <div className="absolute bottom-0 w-full bg-[#0a0a0a] p-4 text-center border-t border-[#c5a059]">
              <h3 className="text-[#c5a059] font-bold">{doc.name}</h3>
              <p className="text-gray-400 text-sm">{doc.spec}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Staff;