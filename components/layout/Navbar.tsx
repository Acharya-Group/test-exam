"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

export default function Navbar() {
const [open, setOpen] = useState(false);

return ( <nav className="w-full bg-[#1A4AF4] text-white px-4 py-3 flex items-center justify-between">
   <Link href="/dashboard">
     <h1 className="font-bold text-xl">Ycb Mock Exam</h1>
   </Link>

  {/* Desktop */}
  <div className="hidden md:flex items-center gap-6">
   <div className="flex gap-4">
            <Link href="/about-us" className="hover:text-white">
              About
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact-us" className="hover:text-white">
              Contact
            </Link>
            <Link href="/" className="hover:text-white">
              Logout
            </Link>
          </div>
  </div>

  {/* Mobile Menu Button */}
  <button onClick={() => setOpen(!open)} className="md:hidden">
    {open ? <FiX size={26} /> : <FiMenu size={26} />}
  </button>

  {/* Mobile Dropdown */}
  {open && (
    <div className="absolute top-16 right-3 bg-white w-48 shadow-lg rounded-lg p-4 md:hidden text-black">
       <div className="flex flex-col gap-4">
            <Link href="/about-us" className="hover:text-white">
              About
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact-us" className="hover:text-white">
              Contact
            </Link>
            <Link href="/" className="hover:text-white">
              Logout
            </Link>
          </div>
    </div>
  )}
</nav>
);
}
