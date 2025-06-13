import React from 'react';
import 'animate.css';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 animate__animated animate__fadeIn">
      <div className="flex flex-col items-center p-8 rounded-2xl  bg-opacity-10 backdrop-blur-sm shadow-lg">
        <img
          src="./logo-with-text.webp"
          className="w-24 md:w-32 h-auto mb-5 animate-pulse"
          alt="Logo"
        />
        <div className="text-white text-xl font-bold flex items-center">
          <span>Loading</span>
          <span className="animate-bounce mx-0.5">.</span>
          <span className="animate-bounce mx-0.5 animation-delay-200">.</span>
          <span className="animate-bounce mx-0.5 animation-delay-400">.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
