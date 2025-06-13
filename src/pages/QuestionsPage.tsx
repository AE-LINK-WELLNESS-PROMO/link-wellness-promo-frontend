import { useState, useEffect } from 'react';
import { useUserInfo } from '../context/UserInfoContext';
import { useNavigate } from 'react-router-dom';
import { questions as allQuestions } from '../common/const';
import { getLanguage } from '../services/TokenService';
import { STRINGS } from '../common/strings';

function getRandomQuestions(arr: any[], n: number) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function QuestionsPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<(number|null)[]>([]);
  const { userInfo, setUserInfo } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.bmi) {
      navigate('/basic', { replace: true });
    }
    // Pick 5 random questions on mount
    const qs = getRandomQuestions(allQuestions, 5);
    setQuestions(qs);
    setAnswers(Array(5).fill(null));
    // Reset quiz score for new attempt
    setUserInfo((prev: any) => ({ ...prev, quizScore: 0, quizTotal: 100 }));
    // eslint-disable-next-line
  }, []);

  const allAnswered = answers.every((a) => a !== null);

  const handleNext = () => {
    if (!allAnswered) return;
    // Calculate score
    let totalScore = 0;
    const answerDetails = questions.map((q, qi) => ({
      question: q.question,
      selectedAnswer: q.answers[answers[qi]],
      selectedIndex: answers[qi],
      correctAnswer: q.answers[q.answerIndex],
      correctIndex: q.answerIndex,
      isCorrect: answers[qi] === q.answerIndex,
    }));
    questions.forEach((q, qi) => {
      if (answers[qi] === q.answerIndex) {
        totalScore += 20;
      }
    });
    setUserInfo((prev: any) => ({
      ...prev,
      quizScore: totalScore,
      quizTotal: 100,
      answerDetails, // <-- add this to context if you want to use it elsewhere
    }));
    console.log('Answer Details:', answerDetails); // <-- log the array json
    navigate('/result');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center animate__animated animate__fadeIn py-8">
      <div className="flex justify-center mb-6">
        <img
          src="./logo-with-text.webp"
          className="w-40 md:w-80 h-auto"
          alt="Logo"
        />
      </div>
      <div className="px-4 md:px-10 w-full max-w-2xl mx-auto animate__animated animate__fadeInUp">
        {questions.map((q: any, qi: number) => (
          <div key={q.id} className="mb-6 pb-4 border-b border-green-200">
            <div className="flex items-center mb-2">
              <span className="bg-green-300 text-green-900 rounded-full min-w-8 h-8 flex items-center justify-center font-extrabold text-md mr-3">
                {qi + 1}
              </span>
              <span className="font-bold text-lg md:text-xl text-gray-800 noto-sans-sinhala-font">
                {q.question}
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {q.answers.map((opt: string, oi: number) => (
                <label
                  key={oi}
                  className="flex items-start gap-3 mb-1 cursor-pointer select-none ml-10"
                >
                  <span
                    className={`max-w-7 max-h-7 mt-1 rounded-full border-2 flex items-center justify-center ${
                      answers[qi] === oi
                        ? 'border-green-600 bg-green-50'
                        : 'border-green-400 bg-transparent'
                    } transition-colors`}
                    style={{ borderRadius: '50%' }}
                  >
                    <input
                      type="radio"
                      name={`q${qi}`}
                      checked={answers[qi] === oi}
                      onChange={() => setAnswers(ans => ans.map((a, idx) => idx === qi ? oi : a))}
                      className="hidden"
                    />
                    <span
                      className={`w-4 h-4 rounded-full ${
                        answers[qi] === oi ? 'bg-green-500' : ''
                      }`}
                      style={{ borderRadius: '50%' }}
                    ></span>
                  </span>
                  <span className={`noto-sans-sinhala-font text-sm break-words max-w-full ${answers[qi] === oi ? 'text-green-600 font-semibold' : 'text-gray-700'}`}>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6 mb-2">
          <span className="noto-sans-sinhala-font text-green-700 font-semibold text-base md:text-lg">
            {answers.filter(a => a !== null).length} / {answers.length} {STRINGS.FINISH_QUESTIONNAIRE[getLanguage()]}
          </span>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={handleNext}
            type="button"
            disabled={!allAnswered}
            className={`focus:outline-none text-white ${
              allAnswered
                ? 'bg-green-700 hover:bg-green-800'
                : 'bg-gray-400 cursor-not-allowed opacity-70'
            } focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-lg md:text-lg px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full md:w-1/2 mt-8 md:mt-10 h-15 transition-colors duration-200 noto-sans-sinhala-font`}
          >
            {STRINGS.SUBMIT[getLanguage()]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;