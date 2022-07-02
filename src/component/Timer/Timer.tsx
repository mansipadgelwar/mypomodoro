import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { usePomodoro } from "../../context";
import "../Timer/Timer.css";

type RemainingTime = {
  remainingTime: number;
};

type TimeProps = {
  time: string | number | any;
};

const Timer = ({ time }: TimeProps) => {
  time = time * 60;
  const { pomodoroState, setTitle } = usePomodoro();

  const renderTime = ({ remainingTime }: RemainingTime) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }
    const hours = Math.floor(remainingTime / 3600) | 0;
    const minutes = Math.floor((remainingTime % 3600) / 60) | 0;
    const seconds = remainingTime % 60 | 0;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setTitle(`${hours}:${minutes}:${seconds}`);
    }, [hours, minutes, seconds]);

    return (
      <div className="timer text-bold">
        <div className="text">Remaining</div>
        <div className="value">{`${hours}:${minutes}:${seconds}`}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

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
