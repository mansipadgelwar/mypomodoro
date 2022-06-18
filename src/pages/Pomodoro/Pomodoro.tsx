import "./Pomodoro.css";
import { Timer } from "../../component/Timer/Timer";
import { usePomodoro, useService } from "../../context";
import { useParams } from "react-router-dom";

const Pomodoro = () => {
  const { state } = useService();
  const { id } = useParams();
  const { pomodoroDispatch } = usePomodoro();

  const currentTask = state.tasks.find((item) => item.id === id);

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-menu">
        <Timer time={currentTask?.time} />
        <div className="pomodoro-controls">
          <button
            className="btn btn-cta"
            onClick={() =>
              pomodoroDispatch({ type: "START_CLOCK", payload: { play: true } })
            }
          >
            Start
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              pomodoroDispatch({
                type: "PAUSE_CLOCK",
                payload: { play: false },
              })
            }
          >
            Pause
          </button>
        </div>

        <button
          className="btn btn-secondary-outline pomodoro-restart"
          onClick={() =>
            pomodoroDispatch({
              type: "RESET_CLOCK",
              payload: { play: true, key: 5 },
            })
          }
        >
          Restart
        </button>
      </div>
      <div className="task-description-container">
        <div className="task-title h2 text-bold">{currentTask?.title}</div>
        <div className="task-description">{currentTask?.description}</div>
        <div className="text-bold">
          Date added: {`${new Date(currentTask?.date).toLocaleString()}`}
        </div>
      </div>
    </div>
  );
};

export { Pomodoro };
