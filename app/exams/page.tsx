"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Question = {
  id: number;
  q: string;
  options: string[];
  answer?: number; // index of correct option (for internal use)
};

export default function ExamUI_Yoga() {
  const router = useRouter();

  // ----- English Questions (15) -----
  const questionsEnglish: Question[] = [
    { id: 1, q: "What is the Sanskrit name for the 'Downward Facing Dog' pose?", options: ["Tadasana", "Adho Mukha Svanasana", "Balasana", "Sukhasana"], answer: 1 },
    { id: 2, q: "Which breathing technique is commonly used in yoga for relaxation?", options: ["Kapalabhati", "Bhastrika", "Ujjayi", "Sheetali"], answer: 2 },
    { id: 3, q: "Which yoga style is best known for holding poses for a long time and deep stretching?", options: ["Vinyasa", "Ashtanga", "Yin Yoga", "Kundalini"], answer: 2 },
    { id: 4, q: "Which chakra is associated with compassion and is located near the heart?", options: ["Root (Muladhara)", "Heart (Anahata)", "Throat (Vishuddha)", "Third Eye (Ajna)"], answer: 1 },
    { id: 5, q: "What is the main purpose of the 'Savasana' pose at the end of a session?", options: ["Strength building", "Deep relaxation and integration", "Balance improvement", "Cardio workout"], answer: 1 },
    { id: 6, q: "Which pose is commonly used to strengthen the core and is done on hands and toes?", options: ["Plank Pose (Phalakasana)", "Bridge Pose (Setu Bandha)", "Tree Pose (Vrikshasana)", "Child's Pose (Balasana)"], answer: 0 },
    { id: 7, q: "The term 'Asana' in yoga primarily means what?", options: ["Breath", "Meditation", "Posture/seat", "Sound"], answer: 2 },
    { id: 8, q: "Which pose is best for improving balance on one leg?", options: ["Warrior II (Virabhadrasana II)", "Tree Pose (Vrikshasana)", "Cobra (Bhujangasana)", "Seated Forward Bend (Paschimottanasana)"], answer: 1 },
    { id: 9, q: "Which practice focuses on the union of breath and movement?", options: ["Meditation", "Pranayama", "Ashtanga chanting", "Vinyasa flow"], answer: 3 },
    { id: 10, q: "What is 'Pranayama' in yoga?", options: ["Posture practice", "Breath control techniques", "Dietary rules", "Mantra recitation"], answer: 1 },
    { id: 11, q: "Which pose gently opens the chest and can help improve posture?", options: ["Bridge Pose (Setu Bandha)", "Seated Twist (Ardha Matsyendrasana)", "Crow Pose (Bakasana)", "Standing Forward Bend (Uttanasana)"], answer: 0 },
    { id: 12, q: "How often is it recommended for a beginner to practice yoga to see noticeable benefits?", options: ["Once a month", "2-3 times per week", "Every day for 10+ hours", "Once a year"], answer: 1 },
    { id: 13, q: "Which of the following is a contraindication for practicing deep forward bends?", options: ["Lower back injury", "Good hamstring flexibility", "Mild cold", "Well warmed-up body"], answer: 0 },
    { id: 14, q: "Which yoga pose stimulates digestion by compressing the abdomen?", options: ["Boat Pose (Navasana)", "Shoulder Stand (Sarvangasana)", "Seated Forward Bend (Paschimottanasana)", "Twist (Ardha Matsyendrasana)"], answer: 3 },
    { id: 15, q: "What does the 'Sun Salutation' (Surya Namaskar) primarily provide?", options: ["A relaxation-only sequence", "A sequence for warming, strength and flexibility", "Only breathing exercise", "A seated meditation"], answer: 1 },
  ];

  // ----- Hindi Questions (15) -----
  const questionsHindi: Question[] = [
    { id: 1, q: "'डाउनवर्ड फेसिंग डॉग' का संस्कृत नाम क्या है?", options: ["ताड़ासन", "अधोमुख श्वानासन", "बालासन", "सुखासन"], answer: 1 },
    { id: 2, q: "विश्राम के लिए किस श्वास तकनीक का प्रयोग अक्सर योग में किया जाता है?", options: ["कपालभाति", "भस्त्रिका", "उज्जायी", "शीतली"], answer: 2 },
    { id: 3, q: "कौन सा योग स्टाइल लंबे समय तक पोज़ होल्ड करने और गहरी स्ट्रेचिंग के लिए जाना जाता है?", options: ["विन्यास", "अष्टांग", "यिन योग", "कुंडलिनी"], answer: 2 },
    { id: 4, q: "किस चक्र को करुणा से जोड़ा जाता है और यह हृदय के पास स्थित है?", options: ["मूलाधार", "अनाहत (हृदय)", "विशुद्ध (कंठ)", "आज्ञा (तीसरी आंख)"], answer: 1 },
    { id: 5, q: "सत्र के अंत में 'शवासन' का मुख्य उद्देश्य क्या है?", options: ["शक्ति निर्माण", "गहन विश्राम और समेकन", "संतुलन सुधारना", "कार्डियो व्यायाम"], answer: 1 },
    { id: 6, q: "कौन सा पोज़ कोर को मजबूत करने के लिए सामान्यतः हाथ और पैरों की उंगलियों पर किया जाता है?", options: ["फ्लैंक पोज (प्लैंक)", "सेतुबंधासन (ब्रिज)", "वृक्षासन", "बालासन"], answer: 0 },
    { id: 7, q: "योग में 'आसन' शब्द का प्राथमिक अर्थ क्या है?", options: ["श्वास", "ध्यान", "आसन/बैठने की स्थिति", "ध्वनि"], answer: 2 },
    { id: 8, q: "एक पैर पर संतुलन सुधारने के लिए सबसे अच्छा पोज़ कौन सा है?", options: ["वीरभद्रासन II", "वृक्षासन", "भुजंगासन", "पश्चिमोत्तानासन"], answer: 1 },
    { id: 9, q: "कौन सी प्रैक्टिस श्वास और गति के मिलन पर केंद्रित है?", options: ["ध्यान", "प्राणायाम", "अष्टांग मंत्र", "विन्यास फ्लो"], answer: 3 },
    { id: 10, q: "योग में 'प्राणायाम' क्या है?", options: ["आसन अभ्यास", "श्वास नियंत्रित करने की तकनीकें", "डाइटरी नियम", "मंत्र जप"], answer: 1 },
    { id: 11, q: "कौन सा पोज़ धीरे-धीरे छाती खोलता है और मुद्रा सुधारने में मदद करता है?", options: ["सेतुबंधासन", "आधा मत्स्येन्द्रासन (ट्विस्ट)", "बकासना", "उत्तानासन"], answer: 0 },
    { id: 12, q: "एक शुरुआतकर्ता को स्पष्ट लाभ दिखने के लिए कितनी बार योग अभ्यास करना चाहिए?", options: ["महीने में एक बार", "सप्ताह में 2-3 बार", "हर दिन 10+ घंटे", "साल में एक बार"], answer: 1 },
    { id: 13, q: "गहरी फॉरवर्ड बेंड्स का कौन सा प्रतिबंध (contraindication) है?", options: ["निचला पीठ चोट", "अच्छी हैमस्ट्रिंग फ्लेक्सिबिलिटी", "हल्का सर्दी", "अच्छी तरह वार्म्ड शरीर"], answer: 0 },
    { id: 14, q: "कौन सा योग पोज़ पाचन को उत्तेजित करता है क्योंकि यह पेट को दबाता है?", options: ["नावासन", "शरदासन (शोल्डर स्टैंड)", "पश्चिमोत्तानासन", "मध्य ट्विस्ट"], answer: 3 },
    { id: 15, q: "'सूर्य नमस्कार' (Surya Namaskar) मुख्य रूप से क्या प्रदान करता है?", options: ["केवल विश्राम" , "वार्मिंग, शक्ति और लचीलापन", "केवल श्वास अभ्यास", "बैठकर ध्यान"], answer: 1 },
  ];

  // ----- State -----
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const questions = language === "english" ? questionsEnglish : questionsHindi;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [review, setReview] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 20 minutes by default

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // if time is up, auto submit (simple behavior)
    if (timeLeft === 0) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

 const handleSubmit = () => {
  const total = questions.length;

  const attempted = Object.keys(selected).length;
  const notAttempted = total - attempted;

  const attemptedReviewed = Object.keys(selected).filter(
    (id) => review[Number(id)]
  ).length;

  const attemptedNotReviewed = attempted - attemptedReviewed;

  const notAttemptedReviewed = Object.keys(review).filter(
    (id) => review[Number(id)] && selected[Number(id)] === undefined
  ).length;

  const notAttemptedNotReviewed = notAttempted - notAttemptedReviewed;

  // correct answers count (for scoring)
  const correct = questions.reduce((acc, q) => {
    const picked = selected[q.id];
    if (picked === undefined) return acc;
    return acc + (q.answer === picked ? 1 : 0);
  }, 0);

  const summary = {
    attempted,
    attemptedReviewed,
    attemptedNotReviewed,
    notAttempted,
    notAttemptedReviewed,
    notAttemptedNotReviewed,
    correct,
  };

  router.push(`/thankyou?data=${encodeURIComponent(JSON.stringify(summary))}`);
};


  // Responsive: if changing language, keep user's answers by question id (ids same across languages)

  const q = questions[current];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-lg">Ycb Mock Test</h1>
          <span className="text-sm opacity-90">(15 Questions · Yoga)</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="lang"
                checked={language === "english"}
                onChange={() => setLanguage("english")}
                className="accent-white"
              />
              English
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="lang"
                checked={language === "hindi"}
                onChange={() => setLanguage("hindi")}
                className="accent-white"
              />
              हिन्दी
            </label>
          </div>

          <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded">
            Time: <span className="font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left - Question Area */}
        <div className="flex-1 p-4 md:p-6">
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Question {current + 1} of {questions.length}</p>
                <p className="text-xs text-gray-500">ID: {1000000 + q.id}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
                >
                  Prev
                </button>

                <button
                  onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                  disabled={current === questions.length - 1}
                  className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>

            <h2 className="mt-4 text-lg font-semibold">{q.q}</h2>

            <div className="mt-4 grid gap-3">
              {q.options.map((opt, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3 border rounded cursor-pointer hover:shadow ${selected[q.id] === idx ? "border-blue-600 bg-blue-50" : "bg-white"}`}
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    checked={selected[q.id] === idx}
                    onChange={() => setSelected((prev) => ({ ...prev, [q.id]: idx }))}
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6 border-t pt-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={review[q.id] || false}
                  onChange={(e) => setReview((prev) => ({ ...prev, [q.id]: e.target.checked }))}
                />
                <label className="text-sm">Mark for Review</label>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={handleSubmit} className="px-4 py-2 bg-red-600 text-white rounded">Submit</button>
              </div>
            </div>
          </div>

          {/* Mobile Question Navigator */}
          <div className="mt-4 md:hidden">
            <div className="overflow-x-auto">
              <div className="flex gap-2">
                {questions.map((qq) => (
                  <button
                    key={qq.id}
                    onClick={() => setCurrent(qq.id - 1)}
                    className={`min-w-[44px] h-11 rounded border flex items-center justify-center text-sm ${selected[qq.id] !== undefined ? "bg-green-600 text-white" : review[qq.id] ? "bg-yellow-300" : "bg-gray-100"}`}
                  >{qq.id}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right - Sidebar */}
        <aside className="w-full md:w-72 border-l p-4 bg-gray-50">
          <div className="mb-4">
            <h3 className="font-semibold">Navigator</h3>
            <p className="text-xs text-gray-500">Tap a number to jump to that question</p>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-4">
            {questions.map((qq) => (
              <button
                key={qq.id}
                onClick={() => setCurrent(qq.id - 1)}
                className={`p-2 rounded text-sm border ${selected[qq.id] !== undefined ? "bg-green-600 text-white" : review[qq.id] ? "bg-yellow-400 text-black" : "bg-white"}`}
              >{qq.id}</button>
            ))}
          </div>

          <div className="bg-white rounded shadow p-3">
            <h4 className="font-semibold text-sm mb-2">Summary</h4>
            <div className="text-sm space-y-2">
              <div className="flex items-center justify-between">
                <span>Attempted</span>
                <span>{Object.keys(selected).length}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Not Attempted</span>
                <span>{questions.length - Object.keys(selected).length}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Marked for Review</span>
                <span>{Object.keys(review).filter((k) => review[Number(k)]).length}</span>
              </div>
            </div>

          
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p><strong>Tip:</strong> Questions keep the same ID in both languages so your answers remain if you switch language.</p>
          </div>
        </aside>
      </div>

      <footer className="text-center text-xs text-gray-500 py-3">Good luck! • Ycb Mock Test</footer>
    </div>
  );
}
