import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../context/UserInfoContext";
import { createScore } from "../services/QuestionService";
import { useEffect, useRef } from "react";
import { getUserDocumentId } from "../services/TokenService";

function ResultPage() {
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();
  const score = userInfo.quizScore || 0;
  const total = userInfo.quizTotal || 100;
  const percent = Math.round((score / total) * 100);
  const apiCalledRef = useRef(false);

  useEffect(() => {
    if (score === 0) {
      navigate("/quiz", { replace: true });
    }
  }, [score, navigate]);

  useEffect(() => {
    if (!apiCalledRef.current && score > 0) {
      apiCalledRef.current = true;
      updateQuestionScore();
    }
  }, [score]);

  const updateQuestionScore = async () => {
    try {
      const data = {
        data: {
          score: percent,
          user: getUserDocumentId(),
          questions_and_answers: userInfo.answerDetails || [],
        },
      };
      await createScore(data);
    } catch (error) {
      console.error("Error updating question score:", error);
    }
  };

  function getResultDescription(percent: number) {
    if (percent >= 87)
      return "Excellent! You are maintaining a very healthy lifestyle. Keep up your great habits and continue to inspire others.";
    if (percent >= 62)
      return "Great job! You have a healthy lifestyle. Keep building on your good habits for even better wellness.";
    if (percent >= 39)
      return "You are on the right path. Focus on balanced nutrition, regular exercise, and positive mental health for even more improvement.";
    if (percent >= 14)
      return "You have started your wellness journey. Try to add more healthy habits and small changes for a better you.";
    return "Let’s take the first steps together towards a healthier lifestyle. Every small change counts!";
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center animate__animated animate__fadeIn py-8">
      <div className="flex justify-center mb-3">
        <img
          src="./logo-with-text.webp"
          className="w-40 md:w-80 h-auto"
          alt="Logo"
        />
      </div>
      <p className="text-2xl md:text-4xl font-bold text-green-700 text-center mb-4  md:mt-10 animate__animated animate__fadeInDown">
        Healthy Lifestyle Test
      </p>
      <div className="flex flex-col items-center mb-8 animate__animated animate__fadeInDown">
        <div className="relative flex flex-col items-center justify-center mb-4">
          <svg width="120" height="120" className="mb-2">
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke={
                percent >= 87
                  ? "#166534"
                  : percent >= 62
                  ? "#22c55e"
                  : percent >= 39
                  ? "#6fff6f"
                  : percent >= 14
                  ? "#f87171"
                  : "#fde047"
              }
              strokeWidth="10"
              fill="none"
              strokeDasharray={339.292}
              strokeDashoffset={339.292 - (339.292 * percent) / 100}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1s, stroke 1s" }}
            />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              dy=".3em"
              fontSize="2.5em"
              fontWeight="bold"
              fill={percent >= 39 && percent <= 61 ? "#1eae1e" : "#15803d"}
            >
              {percent}%
            </text>
          </svg>
          <span className="text-lg md:text-2xl font-bold text-green-700">
            ඔබගේ ලකුණු
          </span>
        </div>

        <div className="text-center max-w-xl mx-auto text-gray-600 text-base md:text-lg mb-2 px-3">
          {getResultDescription(percent)}
        </div>
      </div>
      <div className="flex justify-center mt-1 w-full px-3 max-w-lg animate__animated animate__fadeInUp">
        <button
          onClick={() => navigate("/card-selection")}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg md:text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full md:w-1/2 mt-8 md:mt-10 h-15"
        >
          ඇතුලූවන්න
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
