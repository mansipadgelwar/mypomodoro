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
  const {
    pomodoroState,
    setTitle,
    setTaskComplete,
    taskComplete,
    completeSession,
  } = usePomodoro();

  const handleTaskCompletion = () => {
    setTaskComplete(false);
  };

  const handleBreakCompletion = () => {
    setTaskComplete(true);
  };

  const renderTime = ({ remainingTime }: RemainingTime) => {
    const hours = (remainingTime && Math.floor(remainingTime / 3600)) || 0;
    const minutes =
      (remainingTime && Math.floor((remainingTime % 3600) / 60)) || 0;
    const seconds = (remainingTime && remainingTime % 60) || 0;

    //eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setTitle(`${hours}:${minutes}:${seconds}`);
    }, [hours, minutes, seconds]);

    if (remainingTime > 0) {
      return (
        <div className="timer text-bold">
          <div className="text">Remaining</div>
          <div className="value">{`${hours}:${minutes}:${seconds}`}</div>
          <div className="text">seconds</div>
        </div>
      );
    }
  };

  const renderBreakTime = ({ remainingTime }: RemainingTime) => {
    if (remainingTime === 0) {
      return <div className="timer">Task Completed</div>;
    }
    const hours = Math.floor(remainingTime / 3600) || 0;
    const minutes = Math.floor((remainingTime % 3600) / 60) || 0;
    const seconds = remainingTime % 60 || 0;

    return (
      <div className="timer text-bold">
        <div className="text">Short Break</div>
        <div className="value">{`${hours}:${minutes}:${seconds}`}</div>
        <div className="text">remaining seconds</div>
      </div>
    );
  };

  return (
    <div>
      {taskComplete && !completeSession ? (
        <CountdownCircleTimer
          key={pomodoroState?.key}
          isPlaying={pomodoroState?.play}
          duration={time}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={handleTaskCompletion}
        >
          {renderTime}
        </CountdownCircleTimer>
      ) : !completeSession ? (
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={handleBreakCompletion}
        >
          {renderBreakTime}
        </CountdownCircleTimer>
      ) : (
        <>
          <div className="gif-container">
            <iframe
              src="https://giphy.com/embed/zwb4AvXN67p6SlvbIW"
              title="task completion GIF"
              width="100%"
              height="100%"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export { Timer };
