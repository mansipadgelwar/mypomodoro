import "./Pomodoro.css";
import { Timer } from "../../component/Timer/Timer";

const Pomodoro = () => {
  return (
    <div className="pomodoro-container">
      <div className="pomodoro-menu">
        <Timer />
        <div className="pomodoro-controls">
          <button className="btn btn-cta">Start</button>
          <button className="btn btn-secondary">Pause</button>
        </div>

        <button className="btn btn-secondary-outline pomodoro-restart">
          Restart
        </button>
      </div>
      <div className="task-description-container">
        <div className="task-title h2 text-bold">Geography Homework</div>
        <div className="task-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of
        </div>
        <div className="h3 text-bold">Tags:</div>
        <div className="tags-container">
          <button className="btn">Restart</button>
          <button className="btn">Restart</button>
          <button className="btn">Restart</button>
        </div>
        <div className="text-bold">Date added: 16 feb 2022</div>
      </div>
    </div>
  );
};

export { Pomodoro };
