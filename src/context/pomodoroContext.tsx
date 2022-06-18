import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import { pomodoroReducer } from "../reducer/pomodoroReducer";

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

type Dispatch = (action: Action) => void;

type PomodoroState = {
  play: boolean;
};

type PomodoroContextType = {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  pomodoroState: PomodoroState;
  pomodoroDispatch: Dispatch;
};

type PomodoroProp = {
  children: ReactNode;
};

const initialPomodoroState: PomodoroState = {
  play: false,
};

const PomodoroContext = createContext({} as PomodoroContextType);

const PomodoroProvider = ({ children }: PomodoroProp) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pomodoroState, pomodoroDispatch] = useReducer(
    pomodoroReducer,
    initialPomodoroState
  );

  return (
    <PomodoroContext.Provider
      value={{ isPlaying, setIsPlaying, pomodoroDispatch, pomodoroState }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

const usePomodoro = () => useContext(PomodoroContext);

export { usePomodoro, PomodoroProvider };
