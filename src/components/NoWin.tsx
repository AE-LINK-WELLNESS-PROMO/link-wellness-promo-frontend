import React from 'react';

const NoWin: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-6">
    <span className="text-3xl md:text-4xl font-bold text-red-600 mb-2">Better luck next time!</span>
    <p className="text-lg text-gray-700">You did not win this time. Try again!</p>
  </div>
);

export default NoWin;
