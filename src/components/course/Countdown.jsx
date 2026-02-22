import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-03-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-red-50 text-center py-4 rounded-xl mb-6">
      <p className="font-semibold text-red-600">
        Batch Starts In: {timeLeft.days} Days {timeLeft.hours} Hours
      </p>
    </div>
  );
};

export default Countdown;