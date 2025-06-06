import React from 'react';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn" style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <div className="bg-[#f3fbd6] rounded-lg shadow-lg p-6 max-w-md w-full relative animate__animated animate__zoomIn">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
