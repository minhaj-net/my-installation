import React, { useEffect, useState } from "react";

const Loading = () => {
  const [visible, setVisible] = useState(false);

  // Fade-in effect on mount
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>

      {/* Spinner */}
      <div className="relative z-10 w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin shadow-lg"></div>

      {/* Loading Text */}
      <p className="mt-6 text-lg font-semibold tracking-wide relative z-10 animate-pulse">
        Loading your page...
      </p>

      {/* Soft glowing circles */}
      <div className="absolute w-40 h-40 rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-60 h-60 rounded-full bg-white/5 blur-2xl animate-pulse-slow delay-1500"></div>
    </div>
  );
};

export default Loading;
