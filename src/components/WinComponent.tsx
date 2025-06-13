import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import celebAnimation from "../../public/celeb.json";
import { promocodes } from "../common/const";
import { sendWinningPromo } from "../services/WinningService";
import { STRINGS } from "../common/strings";
import { getLanguage } from "../services/TokenService";

function getRandomPromo() {
  return promocodes[Math.floor(Math.random() * promocodes.length)];
}

interface WinComponentProps {
  checkWinning: () => void;
  promoCode?: string; // Optional, to support old code
}

const WinComponent: React.FC<WinComponentProps> = ({ checkWinning, promoCode }) => {
  const [seconds, setSeconds] = useState(0);
  const [promo] = useState(() => {
    // If promoCode is provided, create a custom promo object
    if (promoCode) {
      return {
        code: promoCode,
        discount: 25, // Fixed 25% discount as shown in the UI
        expTimeSeconds: 600 // Default expiry time
      };
    }
    // Fall back to random promo if no promoCode provided
    return getRandomPromo();
  });
  const [copied, setCopied] = useState(false);
  const apiCalledRef = useRef(false);

  useEffect(() => {
    setSeconds(promo.expTimeSeconds);
  }, [promo]);

  useEffect(() => {
    console.log("Promo code:", promo.code, apiCalledRef.current);
    if (!apiCalledRef.current) {
      apiCalledRef.current = true;
      triggerSendWinningPromo(promo.code);
    }
  }, [promo]);

  const triggerSendWinningPromo = async (promoCode: string) => {
    try {
      await sendWinningPromo(promoCode);
      checkWinning();
    } catch (error) {
      console.error("Error sending winning promo:", error);
    }
  };

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  // Helper to format seconds as dd:hh:mm:ss until a fixed expiry date
  function formatTimeToDate(targetDate: Date) {
    const now = new Date();
    let diff = Math.max(
      0,
      Math.floor((targetDate.getTime() - now.getTime()) / 1000)
    );
    const days = Math.floor(diff / 86400);
    diff = diff % 86400;
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    return [
      days > 0 ? days + "d" : null,
      String(h).padStart(2, "0"),
      String(m).padStart(2, "0"),
      String(s).padStart(2, "0"),
    ]
      .filter(Boolean)
      .join(":");
  }

  // Calculate the midnight of the following day (12:00 AM tomorrow)
  const getTomorrowMidnight = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  };
  
  // Set expiry date to midnight (12:00 AM) of the next day
  const expiryDate = getTomorrowMidnight();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6  relative overflow-hidden">
      {/* Lottie Firework Animation Overlay */}
      <Lottie
        animationData={celebAnimation}
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div className="flex flex-col items-center w-full max-w-md relative z-20">
        <div className="flex flex-col items-center mb-4">
          <div className="relative flex items-center justify-center mb-2">
            <span className={`${getLanguage() == 0 ? "md:text-5xl" : "md:text-xl"} text-4xl  font-extrabold text-green-700 mb-3 drop-shadow-lg z-10 animate__animated animate__fadeInDown`}>
              {STRINGS.YOU_WON[getLanguage()]}
            </span>
          </div>
          <span className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-2 drop-shadow-lg animate__animated animate__heartBeat animate__infinite animate__slower">
            {/* {promo.discount}% */}
            25%
          </span>
          <span className="text-lg font-semibold text-green-700 mb-1 animate__animated animate__fadeInUp">
            {STRINGS.DISCOUNT[getLanguage()]}
          </span>
        </div>
        <div className="flex flex-col items-center  rounded-2xl px-8 py-5 mb-6 relative">
          <span className="text-lg font-bold text-green-700 mb-2 tracking-wide flex items-center gap-2">
            <svg
              className="w-6 h-6 text-green-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Your Promo Code
          </span>
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2 shadow-inner">
            <span className="text-3xl font-mono font-extrabold text-green-700 tracking-widest select-all drop-shadow-md">
              {promo.code}
            </span>
            <button
              type="button"
              className="ml-2 p-2 rounded-full bg-green-100 hover:bg-green-200 border border-green-300 focus:outline-none transition-colors"
              title="Copy promo code"
              onClick={() => {
                navigator.clipboard.writeText(promo.code);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              <svg
                className="w-6 h-6 text-green-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
                />
              </svg>
            </button>
          </div>
          {copied && (
            <span className="block mt-3 text-green-600 text-base font-bold animate__animated animate__fadeIn flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </span>
          )}
        </div>        <div className="flex flex-col items-center mb-6">
          <span className="text-base text-gray-600 mb-2">Expires in:</span>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl shadow-inner border border-gray-200">
            <span className="text-2xl font-mono font-bold text-green-700 tracking-widest">
              {formatTimeToDate(expiryDate)}
            </span>
            <svg
              className="w-6 h-6 text-green-500 animate-spin-slow"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeOpacity="0.2"
                strokeWidth="4"
              />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>          </div>
          <span className="text-xs text-gray-400 mt-1">
            (Hours : Minutes : Seconds until midnight)
          </span>
        </div>
        <button
          onClick={() =>
            (window.location.href = "https://estore.linknaturalproducts.com/")
          }
          type="button"
          className="focus:outline-none text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-full text-xl px-8 py-3 shadow-lg transition-all duration-200 animate__animated animate__pulse animate__infinite"
          style={{ minWidth: 200 }}
        >
          {STRINGS.GO_TO_STORE[getLanguage()]}
        </button>
      </div>
    </div>
  );
};

export default WinComponent;
