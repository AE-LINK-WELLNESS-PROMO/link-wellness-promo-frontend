import React, { useState } from "react";
import Popup from "./Popup";
import { getLanguage, removeToken } from "../services/TokenService";
import { STRINGS } from "../common/strings";

interface LogoutProps {
  onLogout?: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    removeToken();
    setOpen(false);
    if (onLogout) onLogout();
    window.location.reload();
  };

  return (
    <>
      <button
        className="absolute top-4 right-4 z-50 text-red-600 hover:text-red-600 text-xl focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Logout"
        title="Logout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-6-3h12m0 0l-3-3m3 3l-3 3"
          />
        </svg>
      </button>
      <Popup open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-xl font-bold mb-4">
            {STRINGS.LOGOUT_MESSAGE[getLanguage()]}
          </span>
          <div className="flex gap-4 mt-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Logout;
