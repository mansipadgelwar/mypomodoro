import { Action, PomodoroState } from "../types/pomodoro.type";

const pomodoroReducer = (pomodoroState: PomodoroState, action: Action) => {
  switch (action.type) {
    case "START_CLOCK":
      return { ...pomodoroState, play: action.payload.play };
    case "PAUSE_CLOCK":
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
