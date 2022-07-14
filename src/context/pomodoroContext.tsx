import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import { pomodoroReducer } from "../reducer/pomodoroReducer";
import { PomodoroContextType, PomodoroState } from "../types/pomodoro.type";

type PomodoroProp = {
  children: ReactNode;
};

const initialPomodoroState: PomodoroState = {
  play: false,
  key: 0,
};

const PomodoroContext = createContext({} as PomodoroContextType);

const PomodoroProvider = ({ children }: PomodoroProp) => {
  const [title, setTitle] = useState("");
  const [pomodoroState, pomodoroDispatch] = useReducer(
    pomodoroReducer,
    initialPomodoroState
  );
  const [taskComplete, setTaskComplete] = useState(true);
  const [completeSession, setCompleteSession] = useState(false);

  return (
    <PomodoroContext.Provider
      value={{
        pomodoroDispatch,
        pomodoroState,
        title,
        setTitle,
        taskComplete,
        setTaskComplete,
        completeSession,
        setCompleteSession,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

const usePomodoro = () => useContext(PomodoroContext);

export { usePomodoro, PomodoroProvider };
