import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      
        <h1 className="text-2xl font-extrabold text-teal-600">
          Browsun
        </h1>

        <ul className="hidden md:flex space-x-8 text-black font-semibold">
          <li className="hover:text-amber-600 transition"><a href="/">Home</a></li>
          <li className="hover:text-amber-600 transition"><a href="#about">About</a></li>
          <li className="hover:text-amber-600 transition"><a href="#products">Products</a></li>
          <li className="hover:text-amber-600 transition"><a href="#review">Review</a></li>
          <li className="hover:text-amber-600 transition"><a href="#contacts">Contact</a></li>
        </ul>


        <button
          className="md:hidden text-teal-700 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      <div
        className={`md:hidden bg-gray-100 shadow-inner transition-all overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-black text-center font-medium">
          <li><a onClick={() => setOpen(false)} className="hover:text-amber-600 transition" href="/">Home</a></li>
          <li><a onClick={() => setOpen(false)} className="hover:text-amber-600 transition" href="#about">About</a></li>
          <li><a onClick={() => setOpen(false)} className="hover:text-amber-600 transition" href="#products">Products</a></li>
          <li><a onClick={() => setOpen(false)} className="hover:text-amber-600 transition" href="#review">Review</a></li>
          <li><a onClick={() => setOpen(false)} className="hover:text-amber-600 transition" href="#contacts">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
