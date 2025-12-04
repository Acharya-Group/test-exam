"use client";
import { useEffect, useRef, useState } from "react";

export default function CameraCapture({ onConfirm }: { onConfirm: (img: string) => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [captured, setCaptured] = useState<string | null>(null);
  const [streamStarted, setStreamStarted] = useState(false);

  // Start Camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreamStarted(true);
      }
    } catch (error) {
      alert("Camera permission blocked or unavailable!");
      console.log(error);
    }
  };

  // Capture Image
  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;

    ctx.drawImage(videoRef.current, 0, 0);
    const dataUrl = canvasRef.current.toDataURL("image/jpeg");
    setCaptured(dataUrl);
  };

  // Stop Camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream | null;
    stream?.getTracks().forEach((track) => track.stop());
    setStreamStarted(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      
      {/* Left Side — Live Camera */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold mb-2">Live Camera</h3>

        {!streamStarted ? (
          <button
            onClick={startCamera}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Start Camera
          </button>
        ) : (
          <>
            <video ref={videoRef} autoPlay className="w-full rounded-lg" />
            <button
              onClick={captureImage}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Capture
            </button>
          </>
        )}
      </div>

      {/* Right Side — Captured Image */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold mb-2">Captured Photo</h3>

        {captured ? (
          <>
            <img src={captured} className="rounded-lg w-full" />
            <button
              onClick={() => onConfirm(captured)}
              className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg"
            >
              Confirm
            </button>
          </>
        ) : (
          <p className="text-gray-500">No image captured yet.</p>
        )}

        <canvas ref={canvasRef} className="hidden"></canvas>
      </div>
    </div>
  );
}
