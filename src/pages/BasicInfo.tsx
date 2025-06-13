import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../context/UserInfoContext";
import { getCurrentUser } from "../services/UserService";
import { getBasicInformation, getLanguage } from "../services/TokenService";
import { STRINGS } from "../common/strings";

function BasicInfo() {
  const { userInfo, setUserInfo } = useUserInfo();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userInfo.age ||
      !userInfo.weight ||
      !userInfo.heightFeet ||
      userInfo.heightFeet < 4 ||
      userInfo.heightFeet > 7 ||
      userInfo.heightInches === undefined ||
      userInfo.heightInches < 0 ||
      userInfo.heightInches > 11 ||
      !userInfo.gender
    ) {
      setError(STRINGS.VALIDATION_ERROR.ALL_FIELDS_REQUIRED[getLanguage()]);
      return;
    }
    // Calculate BMI and update context
    // Height is now in feet + inches, convert to meters
    const totalInches = userInfo.heightFeet * 12 + userInfo.heightInches;
    const heightMeters = totalInches * 0.0254;
    const bmi = +(userInfo.weight / heightMeters ** 2).toFixed(1);
    setUserInfo((u) => ({ ...u, bmi }));
    setError("");
    navigate("/bmi");
  };

  const basicInfo = getBasicInformation();

  useEffect(() => {
    getUserData();
  }, []);

  const [currectBasicInfo, setCurrectBasicInfo] = useState(null);

  const getUserData = async () => {
    try {
      const response = await getCurrentUser();
      setCurrectBasicInfo(response.basic_information);
      if (response?.basic_information) {
        setUserInfo((prev) => ({
          ...prev,
          age: response.basic_information.age,
          weight: response.basic_information.weight,
          heightFeet: response.basic_information.height_feet,
          heightInches: response.basic_information.height_inch,
          gender: response.basic_information.gender,
          basic_info_id: response.basic_information.documentId,
        }));
      } else {
        setUserInfo((prev) => ({
          ...prev,
          basic_info_id: "",
        }));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  console.log("Basic Info from Service:", userInfo);

  return (
    <div className="min-h-screen flex flex-col justify-center animate__animated animate__fadeIn">
      <div className="flex justify-center  mt-5">
        <img
          src="./logo-with-text.webp"
          className="w-40 md:w-80 h-auto"
          alt="Logo"
        />
      </div>
      <div className="px-4 md:px-20 w-full max-w-2xl mx-auto">
        <form
          className="mt-8 md:mt-10 space-y-6 animate__animated animate__fadeInUp"
          onSubmit={handleSubmit}
        >
          <div className="rounded-xl flex items-center justify-between px-6 py-4 text-lg font-bold border border-gray-400">
            <label htmlFor="age" className="font-bold noto-sans-sinhala-font">
                {STRINGS.BASIC_INFO.AGE[getLanguage()]}
            </label>
            <div className="relative w-32">
              <select
                id="age"
                className="appearance-none bg-transparent outline-none text-center w-full rounded-lg py-2 px-4 pr-8 focus:ring-green-500 focus:border-green-500"
                value={userInfo.age}
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, age: Number(e.target.value) }))
                }
              >
                {Array.from({ length: 83 }, (_, i) => 18 + i).map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-700">
                ▼
              </span>
            </div>
          </div>
          <div className="rounded-xl flex items-center justify-between px-6 py-4 text-lg font-bold border border-gray-400">
            <label htmlFor="weight" className="font-bold noto-sans-sinhala-font">
               {STRINGS.BASIC_INFO.WEIGHT[getLanguage()]} (Kg)
            </label>
            <div className="relative w-32">
              <select
                id="weight"
                className="appearance-none bg-transparent outline-none text-center w-full rounded-lg  py-2 px-4 pr-8 focus:ring-green-500 focus:border-green-500"
                value={userInfo.weight}
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, weight: Number(e.target.value) }))
                }
              >
                {Array.from({ length: 121 }, (_, i) => 30 + i).map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-700">
                ▼
              </span>
            </div>
          </div>
          <div className="rounded-xl flex items-center justify-between px-6 py-4 text-lg font-bold border border-gray-400">
            <label className="font-bold noto-sans-sinhala-font">  {STRINGS.BASIC_INFO.HEIGHT[getLanguage()]}</label>
            <div className="flex gap-2 w-48">
              <div className="relative w-20">
                <select
                  id="heightFeet"
                  className="appearance-none bg-transparent outline-none text-center w-full rounded-lg py-2 px-4 pr-8 focus:ring-green-500 focus:border-green-500"
                  value={userInfo.heightFeet}
                  onChange={(e) =>
                    setUserInfo((u) => ({
                      ...u,
                      heightFeet: Number(e.target.value),
                    }))
                  }
                >
                  {Array.from({ length: 4 }, (_, i) => 4 + i).map((val) => (
                    <option key={val} value={val}>
                      {val} ft
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-700">
                  ▼
                </span>
              </div>
              <div className="relative w-20">
                <select
                  id="heightInches"
                  className="appearance-none bg-transparent outline-none text-center w-full rounded-lg py-2 px-4 pr-8 focus:ring-green-500 focus:border-green-500"
                  value={userInfo.heightInches}
                  onChange={(e) =>
                    setUserInfo((u) => ({
                      ...u,
                      heightInches: Number(e.target.value),
                    }))
                  }
                >
                  {Array.from({ length: 12 }, (_, i) => i).map((val) => (
                    <option key={val} value={val}>
                      {val} in
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-700">
                  ▼
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-xl flex items-center justify-between px-6 py-4 text-lg font-bold border border-gray-400">
            <label htmlFor="gender" className="font-bold noto-sans-sinhala-font">
              {STRINGS.BASIC_INFO.SELECT_YOUR_GENDER[getLanguage()]}
            </label>
            <div className="relative w-48">
              <select
                id="gender"
                className="appearance-none bg-transparent outline-none text-center w-full rounded-lg py-2 px-4 pr-8 focus:ring-green-500 focus:border-green-500"
                value={userInfo.gender}
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, gender: e.target.value }))
                }
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-700">
                ▼
              </span>
            </div>
          </div>
          {error && (
            <div className="text-red-600 text-center font-semibold mb-2 animate__animated animate__fadeIn">
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

export default BasicInfo;
