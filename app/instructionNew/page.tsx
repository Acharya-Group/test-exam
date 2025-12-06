"use client";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
    const router = useRouter();

    // Popup states for both Capture buttons
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
     function popupbtn() {
        setShowPopup1(false);
        router.push("/review"); 
    }

    const today = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-4 flex-col md:flex-row gap-6 relative">

                {/* -------------------- POPUP OVERLAY -------------------- */}
                {(showPopup1 || showPopup2) && (
                    <div className="absolute inset-0 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                            <h2 className="text-green-700 mb-4">
                                Your face scan is successfully completed. Click on the 'Proceed' button below to start.
                                <br /> Good Luck.
                            </h2>

                            <button
                                onClick={() => popupbtn()}
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                )}

                {/* LEFT SIDE BLACK BOX */}
                <div className="bg-gray-100 h-full w-full"></div>

                {/* RIGHT SIDE CONTENT */}
                <div className="flex-1">
                    <div className="flex items-center justify-start max-w-lg mx-auto p-4 bg-white">
                        <Link href="/instruction">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-6 shadow-md transition">
                                Back
                            </button>
                        </Link>

                        <div className="flex">
                             <div className="relative flex items-center h-10 w-48 text-gray-700 font-semibold text-sm ml-4">
                                <div className="absolute inset-0 bg-gray-300 z-0 transform skew-x-[-15deg] origin-top-left"></div>
                                <span className="relative z-10 p-2 pl-6">
                                    1 Identity Verification
                                </span>
                            </div>
                            <div className="relative flex items-center h-10 w-48 text-white font-semibold text-sm">
                                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 z-0 transform skew-x-[-15deg] origin-top-left"></div>
                                <span className="relative z-10 p-2 pl-4">
                                    2 Facial Recognition
                                </span>
                                <div className="absolute top-0 right-0 h-full w-4 bg-white transform skew-x-[-15deg] origin-top-right translate-x-[90%] z-20"></div>
                            </div>

                           
                        </div>
                    </div>

                    {/* Instruction Section */}
                    <div className="mt-8 bg-white py-6 px-10 shadow rounded-xl">
                        <ul className="list-disc space-y-2">
                            <li>For secure access, we are enabling two-factor authentication through verification of photo identity and face recognition.</li>
                            <li><b>Identity verification</b> will begin 30 minutes before the scheduled start time. Only your original, valid (non-expired) government-issued ID is accepted.</li>
                            <li><b>Photo ID capture:</b> Hold your ID up to the camera, ensuring your photo is clear and within the frame.</li>
                            <li><b>Troubleshooting:</b> If you cannot see your image, refresh the page or check your webcam permissions.</li>
                        </ul>

                        {/* Capture Section */}
                        <div className="flex justify-center gap-10 mt-12">
                            {/* Block 1 */}
                            <div className="flex flex-col items-center">
                                <h3 className="text-center text-green-700 font-semibold text-xl">Capture face</h3>
                                <div className="bg-gray-300 mt-4">
                                    <Image height={300} width={300} src="/images/man.webp" alt="avatar" />
                                </div>

                                <button
                                    onClick={() => setShowPopup1(true)}
                                    className="bg-green-600 px-4 mt-4 text-white font-semibold py-1 rounded-xl"
                                >
                                    Capture
                                </button>
                            </div>

                            {/* Block 2 */}
                            <div className="flex flex-col items-center">
                                <h3 className="text-center text-green-700 font-semibold text-xl">Captured face</h3>
                                <div className="bg-gray-300 mt-4">
                                    <Image height={300} width={300} src="/images/man.webp" alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
