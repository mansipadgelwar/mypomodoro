import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useState,
} from "react";
import { taskReducer } from "../reducer/taskReducer";
import { ListOfTasks, ServiceContextType } from "../types/data.type";

type ServiceProp = {
  children: ReactNode;
};

const initialState: ListOfTasks = {
  tasks: JSON.parse(localStorage.getItem("listOfTasks") || "{}"),
  filteredTasks: [],
};

const ServiceContext = createContext<ServiceContextType>(
  {} as ServiceContextType
);

const ServiceProvider = ({ children }: ServiceProp) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <ServiceContext.Provider
      value={{ state, dispatch, isFiltered, setIsFiltered }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useService = () => useContext(ServiceContext);

export { useService, ServiceProvider };
