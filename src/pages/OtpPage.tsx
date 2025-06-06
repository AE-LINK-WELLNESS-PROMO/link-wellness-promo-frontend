import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/UserService";
import { saveToken } from "../services/TokenService";

function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      setError("Please enter the 4-digit OTP.");
      return;
    }
    setError("");
    try {
      const mobile = localStorage.getItem("link-welness-mobile") || "";
      const otpValue = otp.join("");
      const result = await verifyOtp(mobile, otpValue);
      if (result && result.jwt) {
        saveToken(result);
        localStorage.removeItem("link-welness-mobile");
        window.location.reload();
      }
    } catch (err: any) {
      setError(err.message || "OTP verification failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center animate__animated animate__fadeIn">
      <div className="flex justify-center mt-5">
        <img
          src="./logo-with-text.webp"
          className="w-60 md:w-80 h-auto"
          alt="Logo"
        />
      </div>
      <div className="px-4 md:px-20 w-full max-w-2xl mx-auto">
        <p className="text-2xl md:text-4xl font-bold text-green-700 text-center mt-8 md:mt-10 animate__animated animate__fadeInDown">
          Enter OTP
        </p>
        <form
          className="mt-8 md:mt-10 space-y-6 animate__animated animate__fadeInUp"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center gap-4 mb-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                autoFocus={idx === 0}
              />
            ))}
          </div>
          {error && (
            <div className="text-red-600 text-center font-semibold mb-2 animate__animated animate__fadeInDown">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg md:text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full mt-8 md:mt-10 h-15"
          >
            ඇතුලූවන්න
          </button>
        </form>
      </div>
      <div className="flex justify-center animate__animated animate__fadeInUp animate__delay-1s mt-10">
        <img
          src="./full_items.svg"
          className="w-70 md:w-120 h-auto"
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default OtpPage;
