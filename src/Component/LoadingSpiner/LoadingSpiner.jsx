import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-8 rounded-full border-4 border-pink-500 border-t-transparent animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
