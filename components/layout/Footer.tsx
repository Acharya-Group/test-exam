import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-white">
              YCB Mock Exam
            </h2>
            <p className="mt-1 max-w-md">
              MSPL PRCB is a YCB–AYUSH recognized body providing professional Yoga certification.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/Terms-Conditions" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          © {new Date().getFullYear()} YCB Mock Exam
        </div>
      </div>
    </footer>
  );
};

export default Footer;
