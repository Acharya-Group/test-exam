import { FiCheckCircle, FiClock, FiPlayCircle, FiXCircle } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-full md:w-72 bg-white shadow-md p-4 space-y-4">
      <div className="p-4 bg-green-100 rounded-lg">
        <h3 className="font-bold text-green-800">Mock Exam 2025</h3>

        <p className="text-sm mt-2">Available from: Nov 3 2025</p>
        <p className="text-sm">Duration: 15 min</p>

        <button className="w-full bg-green-600 text-white mt-3 py-2 rounded-lg flex items-center justify-center gap-2">
          <FiCheckCircle /> Verify Identity
        </button>
      </div>
    </div>
  );
}
