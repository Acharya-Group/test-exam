"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExamUI() {
const router = useRouter();

// Dummy 20 Questions
const questions = Array.from({ length: 20 }, (_, i) => ({
id: i + 1,
q: `यह प्रश्न संख्या ${i + 1} का डमी प्रश्न है?`,
options: ["विकल्प A", "विकल्प B", "विकल्प C", "विकल्प D"],
}));

const [current, setCurrent] = useState(0);
const [selected, setSelected] = useState<Record<number, number>>({});
const [review, setReview] = useState<Record<number, boolean>>({});
const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

// Timer
useEffect(() => {
const timer = setInterval(() => {
setTimeLeft((t) => (t > 0 ? t - 1 : 0));
}, 1000);
return () => clearInterval(timer);
}, []);

const formatTime = (sec: number) => {
const m = Math.floor(sec / 60);
const s = sec % 60;
return `${m}:${s < 10 ? "0" + s : s}`;
};

const submitExam = () => {
  const total = questions.length;

  const attempted = Object.keys(selected).length;

  const attemptedReviewed = Object.keys(selected).filter(
    (id) => review[Number(id)] === true
  ).length;

  const attemptedNotReviewed = attempted - attemptedReviewed;

  const notAttempted = total - attempted;

  const notAttemptedReviewed = Object.keys(review).filter(
    (id) => !selected[Number(id)] && review[Number(id)]
  ).length;

  const notAttemptedNotReviewed = notAttempted - notAttemptedReviewed;

  const summary = {
    attempted,
    attemptedReviewed,
    attemptedNotReviewed,
    notAttempted,
    notAttemptedReviewed,
    notAttemptedNotReviewed,
  };

  router.push(`/thankyou?data=${encodeURIComponent(JSON.stringify(summary))}`);
};


const q = questions[current];

return ( <div className="w-full min-h-screen p-0 m-0 bg-white">
{/* TOP BLUE BAR */} <div className="bg-blue-600 text-white py-2 px-4 flex justify-between items-center text-sm"> <p className="font-semibold">Exam Name : Mock Exam 2025</p>

    <div className="flex items-center gap-4">
      <p className="font-semibold">Language :</p>
      <label className="flex items-center gap-1">
        <input type="radio" name="lang" defaultChecked /> English
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="lang" /> Hindi
      </label>
    </div>

    <p className="font-bold text-lg">{formatTime(timeLeft)}</p>
  </div>

  <div className="flex">
    {/* LEFT MAIN QUESTION AREA */}
    <div className="flex-1 p-5">
      <p className="font-semibold text-sm">
        Question {current + 1}:
        <span className="text-green-600 ml-2 text-xs bg-green-100 px-2 py-1 rounded">
          Horizontal
        </span>
      </p>

      <p className="font-semibold text-sm mt-2">
        (Question ID: {1000000 + q.id})
      </p>

      <h2 className="text-lg mt-4 mb-4">{q.q}</h2>

      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={selected[q.id] === i}
              onChange={() =>
                setSelected((prev) => ({ ...prev, [q.id]: i }))
              }
            />
            {opt}
          </label>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-between items-center border-t mt-10 pt-4">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
          className="bg-blue-600 text-white px-5 py-2 rounded disabled:bg-gray-400"
        >
          Previous
        </button>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={review[q.id] || false}
            onChange={(e) =>
              setReview((prev) => ({
                ...prev,
                [q.id]: e.target.checked,
              }))
            }
          />
          <label>Review</label>
        </div>

        {current === questions.length - 1 ? (
          <button
            onClick={submitExam}
            className="bg-red-600 text-white px-5 py-2 rounded"
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={() => setCurrent((c) => c + 1)}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>

    {/* RIGHT SIDEBAR */}
    <div className="w-64 border-l p-4">
      {/* Calendar Boxes */}
      <div className="grid grid-cols-5 gap-2 mb-4">
        {questions.map((q) => (
          <button
            key={q.id}
            onClick={() => setCurrent(q.id - 1)}
            className={`p-2 rounded text-center text-sm border
              ${
                selected[q.id] !== undefined
                  ? "bg-green-600 text-white"
                  : review[q.id]
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-100"
              }
            `}
          >
            {q.id}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="border rounded">
        <p className="bg-blue-600 text-white p-2 font-semibold">
          Overall Summary
        </p>

        <div className="p-3 text-sm space-y-1">
          <p>
            <span className="inline-block w-3 h-3 bg-green-600 mr-2"></span>
            Attempted
          </p>
          <p>
            <span className="inline-block w-3 h-3 bg-gray-300 mr-2"></span>
            Not Attempted
          </p>
          <p>
            <span className="inline-block w-3 h-3 bg-yellow-400 mr-2"></span>
            Attempted and Reviewed
          </p>
          <p>
            <span className="inline-block w-3 h-3 bg-blue-200 mr-2"></span>
            Not Attempted and Reviewed
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

);
}
