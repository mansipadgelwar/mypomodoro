type Action =
  | {
      type: "START_CLOCK";
      payload: boolean;
    }
  | {
      type: "PAUSE_CLOCK";
      payload: boolean;
    }
  | {
      type: "RESET_CLOCK";
      payload: boolean;
    };

type PomodoroState = {
  play: boolean;
};

const pomodoroReducer = (pomodoroState: PomodoroState, action: Action) => {
  switch (action.type) {
    case "START_CLOCK":
      console.log("start clock");
      return { ...pomodoroState, play: action.payload };
    case "PAUSE_CLOCK":
      console.log("pause clock");
      return { ...pomodoroState, play: action.payload };
    case "RESET_CLOCK":
      return { ...pomodoroState, play: true };
    default:
      return pomodoroState;
  }
};

export { pomodoroReducer };
