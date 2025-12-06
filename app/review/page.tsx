"use client";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Review() {
      const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    if (checked) {
      router.push("/exams");
    } else {
      alert("Please agree to the instructions before proceeding.");
    }
  };
 
    return (
       <div className="container mx-auto px-3">
      <Navbar/>
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-3 rounded-t-md mt-10">
        <h1 className="text-lg font-semibold">Mock Exam 2025 Instructions</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-5 text-gray-700 space-y-4">
        
        <p className="text-sm">
          <strong>IMPORTANT:</strong> Please review the instructions carefully before proceeding with the examination.
          The exam will only begin after you have read all instructions thoroughly and clicked the
          <strong> 'I am ready to begin'</strong> button.
        </p>

        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>Welcome to Online Exam for Mock Exam 2025</li>
          <li>Exam has Total 15 Questions</li>
          <li>Total Time for Exam is 15 Minutes</li>
          <li>Negative Marking Exam : No</li>
        </ul>

        <p className="font-semibold text-gray-800">Best of Luck for your Exam</p>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="text-sm">I have read and understood the instructions.</label>
        </div>

        {/* Button */}
        <div className="pt-4">
          <button
            onClick={handleStart}
            className={`w-full py-2 text-white rounded-md transition ${
              checked
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            I am ready to begin
          </button>
        </div>
      </div>
    </div>
    );
}
