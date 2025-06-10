import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import ScratchCard from "../components/ScratchCard";
import WinComponent from "../components/WinComponent";
import Logout from "../components/Logout";
import { checkWinning } from "../services/WinningService";
import { cardAndPromos } from "../common/const";

function CardSelectionPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [scratched, setScratched] = useState(false);
  const [alreadyWon, setAlreadyWon] = useState(false);
  const [alreadyWonModal, setAlreadyWonModal] = useState(false);
  
  // State to hold the 4 randomly selected cards and their data
  const [selectedCardItems, setSelectedCardItems] = useState<typeof cardAndPromos>([]);
  const [selectedCardData, setSelectedCardData] = useState<(typeof cardAndPromos)[0] | null>(null);
  
  // Function to randomly select 4 cards from the available cards in cardAndPromos
  const getRandomCardItems = () => {
    const shuffled = [...cardAndPromos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    checkWinningForUserToday();
    // Set random cards when component loads
    setSelectedCardItems(getRandomCardItems());
  }, []);

  const checkWinningForUserToday = async () => {
    try {
      const result = await checkWinning();
      if (result) {
      } else {
        console.log("User has not won today.");
        setAlreadyWon(true);
        if (!scratched) setAlreadyWonModal(true);
      }
    } catch (error) {
      console.error("Error checking winning status:", error);
      setAlreadyWon(true);
      if (!scratched) setAlreadyWonModal(true);
    }
  };
  
  // Get the promo code based on the selected card and current date
  const getPromoCodeForToday = (cardItem: typeof cardAndPromos[0]) => {
    // Get current date in DD/MM/YYYY format
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    
    // Find promo for today's date
    const todayPromo = cardItem.promo.find(p => p.date === formattedDate);
    
    // If no promo for today, return the one with null date (fallback)
    if (!todayPromo) {
      return cardItem.promo.find(p => p.date === null)?.code || "NOCODE";
    }
    
    return todayPromo.code;
  };

  // Handle card selection
  const handleCardSelect = (idx: number) => {
    if (alreadyWon) return;
    setSelectedCard(idx);
    setSelectedCardData(selectedCardItems[idx]);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center animate__animated animate__fadeIn py-8 relative">
      <Logout />
      <div className="flex justify-center mb-6">
        <img
          src="./logo-with-text.webp"
          className="w-20 md:w-70 h-auto"
          alt="Logo"
        />
      </div>
      <p className="text-xl md:text-3xl font-bold text-green-700 text-center mb-4 md:mt-5 animate__animated animate__fadeInDown">
        කැමති කාඩ්පතක් තෝරන්න
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 w-full max-w-md md:max-w-3xl mx-auto md:mt-10">
        {selectedCardItems.map((cardItem, idx) => (
          <div
            key={cardItem.image}
            className={`rounded-2xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105 relative ${
              alreadyWon ? "pointer-events-none opacity-60" : ""
            }`}
            style={{
              background:
                idx === 0 ? "#eaf26b" : idx === 1 ? "#f43c3c" : "#f6fef6",
            }}
            onClick={() => handleCardSelect(idx)}
          >
            <img
              src={cardItem.image}
              alt={`Card ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
            {alreadyWon && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <svg
                  className="w-16 h-16 text-white opacity-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 11V7a5 5 0 00-10 0v4M5 11h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {alreadyWon && (
        <p className="mt-5 text-sm md:text-2xl font-bold text-red-500 text-center mb-4 md:mt-10 animate__animated animate__fadeInDown">
          දීමනා සඳහා හෙට නැවත එන්න.
        </p>
      )}
      <Popup
        open={selectedCard !== null}
        onClose={() => {
          setSelectedCard(null);
          setScratched(false);
          setSelectedCardData(null);
        }}
      >
        {selectedCard !== null && selectedCardData && (
          <div>
            {!scratched && (
              <p className="text-2xl md:text-4xl font-bold text-green-700 text-center mb-4 md:mt-10 animate__animated animate__fadeInDown">
                කාඩ්පත සූරන්න
              </p>
            )}
            <div className="flex justify-center mb-4 mt-8">
              {!scratched ? (
                <ScratchCard
                  image={selectedCardData.image}
                  onScratchComplete={() => setScratched(true)}
                />
              ) : (
                <WinComponent 
                  checkWinning={() => checkWinningForUserToday()} 
                  promoCode={getPromoCodeForToday(selectedCardData)}
                />
              )}
            </div>
            {!scratched && (
              <div className="text-center text-yellow-700 font-semibold text-xs md:text-base mt-2 mb-2 animate__animated animate__fadeInUp mt-5">
                ඔබේ කාඩ්පත සූරන්න! ඔබට ලැබෙන දීමනාව දැන්ම බලන්න.
              </div>
            )}
          </div>
        )}
      </Popup>
      <Popup
        open={alreadyWonModal}
        onClose={() => {
          setAlreadyWonModal(false);
        }}
      >
        <div className="flex flex-col items-center justify-center p-6">
          <span className="text-2xl md:text-3xl font-bold text-red-600 mb-2 text-center">
            You have already won today!
          </span>
          <span className="text-lg text-gray-700 mb-4">
            Come back tomorrow to try again.
          </span>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg mt-2"
            onClick={() => {
              setAlreadyWonModal(false);
            }}
          >
            OK
          </button>
        </div>
      </Popup>
      <div className="flex justify-center animate__animated animate__fadeInUp animate__delay-1s mt-10">
        <img
          src="./full_items.svg"
          className="w-70 md:w-90 h-auto"
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default CardSelectionPage;
