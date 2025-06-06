import { useRef, useEffect, useState } from "react";
import { useUserInfo } from "../context/UserInfoContext";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { createBasicInfo, updateBasicInfo } from "../services/UserService";
import { getUserDocumentId } from "../services/TokenService";

function BmiPage() {
  const { userInfo } = useUserInfo();
  const { weight, heightFeet, heightInches, age, gender } = userInfo;
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [apiCalled, setApiCalled] = useState(false);
  const apiCalledRef = useRef(false);

  useEffect(() => {
    if (!apiCalledRef.current) {
      apiCalledRef.current = true;
      updateBMIdata();
    }
  }, []);

  useEffect(() => {
    if (
      !weight ||
      !heightFeet ||
      heightFeet < 4 ||
      heightFeet > 7 ||
      heightInches === undefined ||
      heightInches < 0 ||
      heightInches > 11 ||
      !age ||
      !gender
    ) {
      navigate("/basic", { replace: true });
    }
  }, [weight, heightFeet, heightInches, age, gender, navigate]);

  // Calculate BMI (height is now in feet + inches, convert to meters)
  const totalInches = heightFeet * 12 + heightInches;
  const heightMeters = totalInches * 0.0254;
  const bmi = +(weight / heightMeters ** 2).toFixed(1);

  // Determine BMI status and color
  let bmiStatus = "";
  let bmiStatusColor = "";
  if (bmi < 18.5) {
    bmiStatus = "Underweight";
    bmiStatusColor = "bg-blue-300";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiStatus = "Normal";
    bmiStatusColor = "bg-green-600";
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = "Overweight";
    bmiStatusColor = "bg-yellow-400";
  } else {
    bmiStatus = "Obese";
    bmiStatusColor = "bg-red-400";
  }

  // BMI bar colors (20 segments: blue, green, yellow, red)
  const barColors = [
    ...Array(4).fill("bg-blue-300"),
    ...Array(8).fill("bg-green-600"),
    ...Array(4).fill("bg-yellow-400"),
    ...Array(4).fill("bg-red-400"),
  ];
  // The index for the BMI pointer (0-19)
  let bmiIndex = Math.round(((bmi - 15) / (35 - 15)) * 19);
  bmiIndex = Math.max(0, Math.min(19, bmiIndex));

  // Calculate healthy weight range for the given height (BMI 18.5 - 24.9)
  const healthyMin = +(18.5 * heightMeters ** 2).toFixed(1);
  const healthyMax = +(24.9 * heightMeters ** 2).toFixed(1);

  const updateBMIdata = async () => {
    try {
      console.log("Updating BMI data...");
      setApiCalled(true);
      if (userInfo.basic_info_id) {
        const updatedUserInfo = {
          data: {
            age,
            gender,
            weight,
            height_feet: heightFeet,
            height_inch: heightInches,
            bmi: bmi,
          },
        };
        await updateBasicInfo(updatedUserInfo, userInfo.basic_info_id);
      } else {
        const userInfo = {
          data: {
            age,
            gender,
            weight,
            height_feet: heightFeet,
            height_inch: heightInches,
            bmi: bmi,
            user: getUserDocumentId(),
          },
        };

        await createBasicInfo(userInfo);
      }
    } catch (error) {
      console.error("Error updating BMI data:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center animate__animated animate__fadeIn">
      <div className="flex justify-center  mt-5">
        <img
          src="./logo-with-text.webp"
          className="w-40 md:w-80 h-auto"
          alt="Logo"
        />
      </div>
      <div className="px-4 md:px-20 w-full max-w-2xl mx-auto flex flex-col items-center animate__animated animate__fadeInUp">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-2 mt-8 md:mt-10">
          Your BMI
        </h2>
        <div className="text-6xl md:text-7xl font-extrabold text-green-700 text-center mb-15">
          {bmi}
        </div>
        <div className="flex flex-col items-center mb-4 w-full">
          <div className="relative flex items-end h-8 w-full justify-center">
            {barColors.map((color, i) => (
              <div
                key={i}
                className={`w-3 h-6 mx-0.5 rounded ${color} ${
                  i === bmiIndex ? "relative z-10" : ""
                }`}
              ></div>
            ))}
            {/* Pointer */}
            <div
              className="absolute flex flex-col items-center"
              style={{
                left: `calc(${(bmiIndex / barColors.length) * 100}% - 12px)`,
                top: "-38px",
                width: "40px",
              }}
            >
              <span
                className={`text-white font-bold text-xs ${bmiStatusColor} px-2 rounded shadow mb-1`}
                style={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {bmiStatus}
              </span>
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                className="mx-auto"
                style={{ display: "block" }}
              >
                <polygon points="10,12 0,0 20,0" fill="#16a34a" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 md:gap-16 mt-6 mb-2 w-full">
          <div className="flex flex-col items-center">
            <span className="text-green-700 text-xl font-bold">
              {weight} kg
            </span>
            <span className="text-gray-400 font-semibold">Weight</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-700 text-xl font-bold">
              {heightFeet}ft {heightInches}in
            </span>
            <span className="text-gray-400 font-semibold">Height</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-700 text-xl font-bold">{age}</span>
            <span className="text-gray-400 font-semibold">Age</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-700 text-xl font-bold">{gender}</span>
            <span className="text-gray-400 font-semibold">Gender</span>
          </div>
        </div>
        <div className="text-center mt-8 mb-2 w-full">
          <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
            Healthy weight for the height:
          </div>
          <div className="text-2xl md:text-3xl font-bold text-green-700">
            {healthyMin} kg - {healthyMax} kg
          </div>
        </div>
        <div className="text-center mt-8 w-full">
          <a
            href="#"
            className="text-lg font-bold text-green-700 underline cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setShowPopup(true);
            }}
          >
            What is the BMI?
          </a>
        </div>
        <button
          onClick={() => navigate("/quiz")}
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg md:text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full mt-8 md:mt-10 h-15"
        >
          ඇතුලූවන්න
        </button>
        <Popup open={showPopup} onClose={() => setShowPopup(false)}>
          <h3 className="text-xl font-bold mb-2 text-green-700">
            What is BMI?
          </h3>
          <p className="text-gray-700 mb-2">
            BMI (Body Mass Index) is a value derived from the mass (weight) and
            height of a person. It is defined as the body mass divided by the
            square of the body height, and is universally expressed in units of
            kg/m².
          </p>
          <ul className="text-gray-700 text-sm mb-2 list-disc pl-5">
            <li>BMI &lt; 18.5: Underweight</li>
            <li>BMI 18.5 - 24.9: Normal weight</li>
            <li>BMI 25 - 29.9: Overweight</li>
            <li>BMI ≥ 30: Obese</li>
          </ul>
          <p className="text-gray-600 text-xs">
            BMI is a useful screening tool, but it does not directly assess body
            fat or health.
          </p>
        </Popup>
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

export default BmiPage;
