"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ThankYouPage() {
const router = useRouter();
const params = useSearchParams();

const data = params.get("data")
? JSON.parse(params.get("data")!)
: null;

const {
attempted = 0,
attemptedReviewed = 0,
attemptedNotReviewed = 0,
notAttempted = 0,
notAttemptedReviewed = 0,
notAttemptedNotReviewed = 0,
} = data || {};

return ( <div className="w-full min-h-screen bg-white"> <div className="bg-blue-600 text-white text-center py-3 font-semibold text-lg">
Summary </div>

  <div className="bg-green-600 text-white text-center py-2 font-medium">
    Thank You
  </div>

  <div className="max-w-2xl mx-auto px-4 mt-6 space-y-6">

    {/* Attempted Section */}
    <div>
      <h2 className="text-lg font-semibold">
        Total Questions Attempted :{" "}
        <span className="text-blue-600">{attempted}</span>
      </h2>

      <div className="mt-3 bg-gray-100 rounded p-3 flex justify-between items-center">
        <p className="text-sm font-medium">Attempted and Reviewed</p>
        <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded">
          {attemptedReviewed}
        </span>
      </div>

      <div className="mt-2 bg-gray-100 rounded p-3 flex justify-between items-center">
        <p className="text-sm font-medium">Attempted and Not Reviewed</p>
        <span className="bg-green-600 text-white px-3 py-1 text-sm rounded">
          {attemptedNotReviewed}
        </span>
      </div>
    </div>

    {/* Not Attempted Section */}
    <div>
      <h2 className="text-lg font-semibold">
        Total Questions not Attempted :{" "}
        <span className="text-red-600">{notAttempted}</span>
      </h2>

      <div className="mt-3 bg-gray-100 rounded p-3 flex justify-between items-center">
        <p className="text-sm font-medium">Not Attempted and Reviewed</p>
        <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded">
          {notAttemptedReviewed}
        </span>
      </div>

      <div className="mt-2 bg-gray-100 rounded p-3 flex justify-between items-center">
        <p className="text-sm font-medium">Not Attempted and Not Reviewed</p>
        <span className="bg-gray-400 text-white px-3 py-1 text-sm rounded">
          {notAttemptedNotReviewed}
        </span>
      </div>
    </div>

    <div className="text-center mt-6">
      <button
        onClick={() => router.push("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow"
      >
        Continue
      </button>
    </div>
  </div>
</div>

);
}
