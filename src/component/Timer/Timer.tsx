import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { usePomodoro } from "../../context";
import "../Timer/Timer.css";

type RemainingTime = {
  remainingTime: number;
};

type TimeProps = {
  time: string | undefined;
};
const renderTime = ({ remainingTime }: RemainingTime) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer text-bold">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const Timer = ({ time }: TimeProps) => {
  const { pomodoroState } = usePomodoro();
  return (
    <div>
      <CountdownCircleTimer
        key={pomodoroState.key}
        isPlaying={pomodoroState.play}
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
