import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  return (
    <div className="splash-background min-h-screen flex flex-col justify-center animate__animated animate__fadeIn">
      <div className="flex justify-center animate__animated animate__zoomInDown">
        <img
          src="./logo-with-text.webp"
          className="w-70 md:w-80 h-auto"
          alt="Logo"
        />
      </div>

      <div className="px-4 md:px-20 w-full max-w-2xl mx-auto">
        <p className="text-2xl md:text-4xl font-bold text-green-700 text-center mt-8 md:mt-10 animate__animated animate__fadeInDown">
          Healthy Lifestyle Test
        </p>
        <p className="text-xl md:text-4xl font-extrabold text-white text-center mt-6 md:mt-10 text-stroke animate__animated animate__fadeInUp noto-sans-sinhala-font">
          නීරෝගීභාවයේ පුරුදු පරීක්ෂාව
        </p>
        <div className="flex justify-center mt-10 animate__animated animate__fadeInUp">
          <select
            className="rounded-lg border border-green-800 px-4 py-2 text-sm font-bold bg-opacity-80 focus:ring-green-500 focus:border-green-700"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="si">සිංහල</option>
          </select>
        </div>
        <div className="flex justify-center mt-2 animate__animated animate__fadeInUp animate__delay-1s">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg md:text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full md:w-1/2 mt-8 md:mt-10 h-15 noto-sans-sinhala-font"
            onClick={() => navigate("/login")}
          >
            පිවිසෙන්න
          </button>
        </div>
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

export default SplashPage;
