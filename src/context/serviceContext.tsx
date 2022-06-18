import { createContext, useContext, ReactNode, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

type ServiceProp = {
  children: ReactNode;
};

type FormData = {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
};

type ListOfTasks = { tasks: any[] };

type Action =
  | {
      type: "SET_TASK";
      payload: FormData;
    }
  | {
      type: "DELETE_TASK";
      payload: any[];
    }
  | {
      type: "UPDATE_TASK";
      payload: any[];
    };

type Dispatch = (action: Action) => void;

type ServiceContextType = {
  state: ListOfTasks;
  dispatch: Dispatch;
};

const initialState: ListOfTasks = {
  tasks: [],
};

const ServiceContext = createContext<ServiceContextType>(
  {} as ServiceContextType
);

const ServiceProvider = ({ children }: ServiceProp) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <ServiceContext.Provider value={{ state, dispatch }}>
      {children}
    </ServiceContext.Provider>
  );
};

const useService = () => useContext(ServiceContext);

export { useService, ServiceProvider };
