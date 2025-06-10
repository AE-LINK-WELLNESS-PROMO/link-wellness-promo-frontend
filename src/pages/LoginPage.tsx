import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../services/UserService";
import { STRINGS } from "../common/strings";
import { getLanguage } from "../services/TokenService";

function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError(STRINGS.VALIDATION_ERROR.FULL_NAME[getLanguage()]);
      return;
    }
    if (!mobile.startsWith("07")) {
      setError(STRINGS.VALIDATION_ERROR.MOBILE_NUMBER_START[getLanguage()]);
      return;
    }
    if (mobile.length !== 10) {
      setError(STRINGS.VALIDATION_ERROR.MOBILE_NUMBER_LENGTH[getLanguage()]);
      return;
    }
    setError("");
    try {
      await loginService(fullName, mobile);
      localStorage.setItem('link-welness-mobile', mobile);
      navigate("/otp");
    } catch (err: any) {
      setError(err.message || STRINGS.VALIDATION_ERROR.LOGIN_FAILED[getLanguage()]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center animate__animated animate__fadeIn">
      <div className="flex justify-center  mt-5">
        <img
          src="./logo-with-text.webp"
          className="w-60 md:w-80 h-auto"
          alt="Logo"
        />
      </div>
      <div className="px-4 md:px-20 w-full max-w-2xl mx-auto">
        <p className="text-2xl md:text-4xl font-bold text-green-700 text-center mt-8 md:mt-10 animate__animated animate__fadeInDown">
          {STRINGS.HEALTHY_LIFESTYLE_TEST[getLanguage()]}
        </p>
        <form
          className="mt-8 md:mt-10 space-y-6 animate__animated animate__fadeInUp"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 p-3 text-lg focus:ring-green-500 focus:border-green-500"
            placeholder= {STRINGS.FULL_NAME[getLanguage()]}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="tel"
            className="block w-full rounded-lg border border-gray-300 p-3 text-lg focus:ring-green-500 focus:border-green-500"
            placeholder={STRINGS.MOBILE_NUMBER[getLanguage()]}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          {error && (
            <div className="text-red-600 text-center font-semibold mb-2 animate__animated animate__fadeInDown">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg md:text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full mt-8 md:mt-10 h-15"
          >
            {STRINGS.ENTER[getLanguage()]}
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

export default LoginPage;
