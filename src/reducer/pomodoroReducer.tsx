import { Action, PomodoroState } from "../types/pomodoro.type";

const pomodoroReducer = (pomodoroState: PomodoroState, action: Action) => {
  switch (action.type) {
    case "START_CLOCK":
      console.log("start clock");
      return { ...pomodoroState, play: action.payload.play };
    case "PAUSE_CLOCK":
      console.log("pause clock");
      return { ...pomodoroState, play: action.payload.play };
    case "RESET_CLOCK":
      return {
        ...pomodoroState,
        play: action.payload.play,
        key: pomodoroState.key + action.payload.key,
      };
    default:
      return pomodoroState;
  }
};

export { pomodoroReducer };
