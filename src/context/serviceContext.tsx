import { createContext, useContext, ReactNode, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";
import { ListOfTasks, ServiceContextType } from "../types/data.type";

type ServiceProp = {
  children: ReactNode;
};

const initialState: ListOfTasks = {
  tasks: JSON.parse(localStorage.getItem("listOfTasks") || "{}"),
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
