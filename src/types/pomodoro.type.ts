export type Action =
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

export type Dispatch = (action: Action) => void;

export type PomodoroState = {
  play: boolean;
  key: number;
};

export type PomodoroContextType = {
  pomodoroState: PomodoroState;
  pomodoroDispatch: Dispatch;
  title: string;
  setTitle: (title: string) => void;
  taskComplete : boolean,
  setTaskComplete: (value: boolean) => void,
  completeSession : boolean, setCompleteSession: (value: boolean) => void
};


