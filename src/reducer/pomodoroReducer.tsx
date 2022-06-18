type Action =
  | {
      type: "START_CLOCK";
      payload: { play: boolean };
    }
  | {
      type: "PAUSE_CLOCK";
      payload: { play: boolean };
    }
  | {
      type: "RESET_CLOCK";
      payload: { play: boolean; key: number };
    };

type PomodoroState = {
  play: boolean;
  key: number;
};

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
