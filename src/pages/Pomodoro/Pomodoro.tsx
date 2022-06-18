import "./Pomodoro.css";
import { Timer } from "../../component/Timer/Timer";
import { useService } from "../../context";
import { useParams } from "react-router-dom";

const Pomodoro = () => {
  const { state } = useService();
  const { id } = useParams();

  const currentTask = state.tasks.find((item) => item.id === id);

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-menu">
        <Timer time={currentTask.time} />
        <div className="pomodoro-controls">
          <button className="btn btn-cta">Start</button>
          <button className="btn btn-secondary">Pause</button>
        </div>

        <button className="btn btn-secondary-outline pomodoro-restart">
          Restart
        </button>
      </div>
      <div className="task-description-container">
        <div className="task-title h2 text-bold">{currentTask.title}</div>
        <div className="task-description">{currentTask.description}</div>
        <div className="h3 text-bold">Tags:</div>
        <div className="tags-container">
          <button className="btn">Restart</button>
          <button className="btn">Restart</button>
          <button className="btn">Restart</button>
        </div>
        <div className="text-bold">Date added: {currentTask.date}</div>
      </div>
    </div>
  );
};

export { Pomodoro };
