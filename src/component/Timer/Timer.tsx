import { CountdownCircleTimer } from "react-countdown-circle-timer";

type RemainingTime = {
  remainingTime: number;
};

type TimeProps = {
  time: string;
};
const renderTime = ({ remainingTime }: RemainingTime) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const Timer = ({ time }: TimeProps) => {
  return (
    <div>
      <CountdownCircleTimer
        isPlaying
        duration={Number(time)}
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
