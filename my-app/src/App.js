// // import React from "react";

// // // 1. สร้าง Component Button รองรับ variant ต่างๆ
// // function Button({ children, variant = "primary", onClick }) {
// //   const baseStyle = "px-4 py-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2";
  
// //   const variants = {
// //     primary: "bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-400 shadow-sm",
// //     danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300 shadow-sm",
// //     ghost: "bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-300"
// //   };

// //   return (
// //     <button 
// //       onClick={onClick} 
// //       className={`${baseStyle} ${variants[variant] || variants.primary}`}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// // function App() {
// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       {/* 2. ย้าย Navbar ขึ้นมาด้านบนสุด */}
// //       <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 shadow-md">
// //         <span className="text-xl font-bold text-white">
// //           🎬 Movie<span className="text-cyan-400">Hub</span>
// //         </span>
// //         <div className="hidden gap-6 text-slate-300 md:flex">
// //           <a href="#" className="transition hover:text-cyan-400">หน้าแรก</a>
// //           <a href="#" className="transition hover:text-cyan-400">หนังใหม่</a>
// //           <a href="#" className="transition hover:text-cyan-400">รายการโปรด</a>
// //         </div>
// //         <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700">
// //           เข้าสู่ระบบ
// //         </button>
// //       </nav>

// //       {/* Header Banner */}
// //       <div className="bg-slate-100 py-10 text-center">
// //         <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
// //         <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
// //         <p className="text-sm font-semibold uppercase text-cyan-600">since 2026</p>
// //       </div>

// //       {/* Hero Movie Card */}
// //       <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
// //         <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
// //         <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
// //         <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
// //           Sci-Fi
// //         </span>
// //       </div>

// //       {/* Grid Cards */}
// //       <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-3">
// //         <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
// //         <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
// //         <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
// //       </div>

// //       {/* Single Action Button */}
// //       <div className="px-6">
// //         <button className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white transition hover:bg-cyan-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
// //           สมัครเรียน
// //         </button>
// //       </div>

// //       {/* Custom Button Group */}
// //       <div className="flex gap-3 p-6">
// //         <Button variant="primary">บันทึก</Button>
// //         <Button variant="danger">ลบ</Button>
// //         <Button variant="ghost">ยกเลิก</Button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// const movies = [
//   { id: 1, title: 'Interstellar', genre: 'Sci-Fi',    year: 2014 },
//   { id: 2, title: 'Your Name',    genre: 'Animation', year: 2016 },
//   { id: 3, title: 'Parasite',     genre: 'Thriller',  year: 2019 },
// ];

// function App() {
//   return (
//     <div className="flex min-h-screen flex-col bg-slate-50">
//       <Navbar />

//       {/* Hero — ส่วนต้อนรับ */}
//       <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
//         <h1 className="text-3xl font-bold text-white md:text-5xl">
//           ดูหนังดี ๆ ไปด้วยกัน
//         </h1>
//         <p className="mx-auto mt-4 max-w-xl text-slate-400">
//           รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
//         </p>
//       </header>

//       {/* เนื้อหาหลัก — การ์ดหนัง responsive */}
//       <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
//         <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {movies.map((m) => (
//             <div key={m.id}
//                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
//                             transition hover:-translate-y-1 hover:shadow-xl">
//               <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
//               <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
//               <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
//                                text-xs font-medium text-cyan-700">{m.genre}</span>
//             </div>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;