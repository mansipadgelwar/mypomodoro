import "./Pomodoro.css";
import { Timer } from "../../component/Timer/Timer";
import { usePomodoro, useService } from "../../context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FormData } from "../../types/data.type";

const Pomodoro = () => {
  const { state } = useService();
  const { id } = useParams();
  const {
    pomodoroDispatch,
    title,
    setCompleteSession,
    taskComplete,
    completeSession,
    setTaskComplete,
  } = usePomodoro();

  const currentTask: FormData | undefined = state.tasks.find(
    (item) => item.id === id
  );

  const handleCompleteTask = () => {
    setCompleteSession(!completeSession);
    setTaskComplete(true);
  };

  useEffect(() => {
    document.title = `${title} 🙇‍♂️| Pomodoro`;
  });

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-menu">
        <Timer time={currentTask?.time} />

        {taskComplete && !completeSession ? (
          <>
            <div className="pomodoro-controls">
              {" "}
              <button
                className="btn btn-cta"
                onClick={() =>
                  pomodoroDispatch({
                    type: "START_CLOCK",
                    payload: { play: true },
                  })
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
            <>
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
            </>
            {!completeSession ? (
              <button
                className="btn btn-secondary-outline pomodoro-restart"
                onClick={handleCompleteTask}
              >
                Complete session
              </button>
            ) : (
              <button
                className="btn btn-secondary-outline pomodoro-restart"
                onClick={handleCompleteTask}
              >
                Start session
              </button>
            )}
          </>
        ) : !completeSession ? (
          <button
            className="btn btn-secondary-outline pomodoro-restart"
            onClick={handleCompleteTask}
          >
            Complete session
          </button>
        ) : (
          <button
            className="btn btn-secondary-outline pomodoro-restart"
            onClick={handleCompleteTask}
          >
            Start session
          </button>
        )}
      </div>
      <div className="task-description-container">
        <div className="task-title h2 text-bold">{currentTask?.title}</div>
        <div className="task-description">{currentTask?.description}</div>
        <div className="h3 text-bold">Tags:</div>
        <div className="tags-container">
          {currentTask ? (
            currentTask?.tags?.map((element: any) => {
              return (
                <div key={element} className="text-bold tags">
                  {`${JSON.stringify(element.label).replaceAll('"', "")}`}
                </div>
              );
            })
          ) : (
            <div className="text-bold">
              <p className="gray-text">No tags selected</p>
            </div>
          )}
        </div>
        <div className="text-bold">
          Date added:{" "}
          {currentTask?.date &&
            `${new Date(currentTask?.date).toLocaleString()}`}
        </div>
      </div>
    </div>
  );
};

export { Pomodoro };
