"use client";

import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

export default function Navbar() {
const [open, setOpen] = useState(false);

return ( <nav className="w-full bg-[#1A4AF4] text-white px-4 py-3 flex items-center justify-between"> <h1 className="font-bold text-xl">Dashboard</h1>

  {/* Desktop */}
  <div className="hidden md:flex items-center gap-6">
    <input
      type="text"
      placeholder="Search"
      className="px-3 py-1 rounded text-black"
    />
    <FiUser size={24} className="cursor-pointer" />
  </div>

  {/* Mobile Menu Button */}
  <button onClick={() => setOpen(!open)} className="md:hidden">
    {open ? <FiX size={26} /> : <FiMenu size={26} />}
  </button>

  {/* Mobile Dropdown */}
  {open && (
    <div className="absolute top-16 right-3 bg-white w-48 shadow-lg rounded-lg p-4 md:hidden text-black">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-3 py-1 rounded border mb-3"
      />

      <div className="flex items-center gap-2 cursor-pointer">
        <FiUser /> Profile
      </div>
    </div>
  )}
</nav>
);
}
