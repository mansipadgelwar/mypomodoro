import { CountdownCircleTimer } from "react-countdown-circle-timer";

type RemainingTime = {
  remainingTime: number;
};
const renderTime = ({ remainingTime }: RemainingTime) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const Timer = () => {
  return (
    <div>
      <CountdownCircleTimer
        isPlaying
        duration={20}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export { Timer };
