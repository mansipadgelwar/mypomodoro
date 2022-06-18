import { createContext, ReactNode, useContext, useReducer } from "react";
import { pomodoroReducer } from "../reducer/pomodoroReducer";

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

type Dispatch = (action: Action) => void;

type PomodoroState = {
  play: boolean;
  key: number;
};

type PomodoroContextType = {
  pomodoroState: PomodoroState;
  pomodoroDispatch: Dispatch;
};

type PomodoroProp = {
  children: ReactNode;
};

const initialPomodoroState: PomodoroState = {
  play: false,
  key: 0,
};

const PomodoroContext = createContext({} as PomodoroContextType);

const PomodoroProvider = ({ children }: PomodoroProp) => {
  const [pomodoroState, pomodoroDispatch] = useReducer(
    pomodoroReducer,
    initialPomodoroState
  );

  return (
    <PomodoroContext.Provider value={{ pomodoroDispatch, pomodoroState }}>
      {children}
    </PomodoroContext.Provider>
  );
};

const usePomodoro = () => useContext(PomodoroContext);

export { usePomodoro, PomodoroProvider };
