"use client"
import Navbar from "@/components/layout/Navbar";
import { FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Dashboard() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const tabs = [
    { label: "All", count: 3, color: "bg-[#7B61FF]" },
    { label: "Yet To Start", count: 1, color: "bg-[#FFC700]" },
    { label: "Resume", count: 0, color: "bg-[#00C2FF]" },
    { label: "Completed", count: 2, color: "bg-[#00D181]" },
    { label: "Expired", count: 0, color: "bg-[#FF5A5A]" },
    { label: "Terminated", count: 0, color: "bg-[#FF3D3D]" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col md:flex-row gap-6">
        {/* LEFT EXAM CARD */}
        <div className="bg-white shadow-lg rounded-xl p-4 w-full md:w-72">
          <div className="bg-green-100 rounded-xl p-4">
            <h2 className="font-bold text-green-800 text-lg">Mock Exam 2025</h2>

            <div className="text-sm mt-3 space-y-1">
              <p>
                Available from: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <p>
                Available until: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <p>Time Zone: India Standard Time</p>
              <p>Questions: 15</p>
              <p>Duration: 15 min</p>
            </div>

            {/* BUTTON → OPEN MODAL */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-600 w-full text-white p-2 mt-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              <FiCheckCircle /> Verify Identity
            </button>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-4">
            {tabs.map((t, i) => (
              <div key={i} className="flex items-center gap-2 cursor-pointer">
                <span
                  className={`w-6 h-6 flex items-center justify-center text-white rounded-full text-sm ${t.color}`}
                >
                  {t.count}
                </span>
                <span className="font-medium">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 shadow rounded-xl">
            <h2 className="text-xl font-bold">Dashboard Overview</h2>
            <p className="mt-2 text-gray-700">Your exam status summary appears here.</p>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 text-gray-600 text-xl"
            >
              ×
            </button>

            <h2 className="text-lg font-bold bg-green-600 text-white p-2 rounded">
              Candidate Confirmation
            </h2>

            <div className="mt-4 space-y-2 text-gray-800">
              <p><strong>Exam Name:</strong> Mock Exam 2025</p>
              <p><strong>Candidate ID:</strong> YE220159780</p>
              <p><strong>Candidate Name:</strong> Your Name</p>

              <div className="flex justify-center mt-3">
                <div className="w-24 h-28 bg-gray-200 rounded-md"></div>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>I confirm, the above information is correct.</span>
              </label>
            </div>

            {/* CONFIRM BUTTON WITH PERMISSION REQUEST */}
            <button
              onClick={() => {
                // Must wrap inside a direct click handler
                navigator.mediaDevices
                  .getUserMedia({ video: true, audio: true })
                  .then(() => {
                    router.push("/instruction");
                  })
                  .catch(() => {
                    alert("Please allow camera and microphone to continue.");
                  });
              }}
              className="bg-green-600 w-full text-white p-2 mt-4 rounded-lg hover:bg-green-700 transition"
            >
              Confirm
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
