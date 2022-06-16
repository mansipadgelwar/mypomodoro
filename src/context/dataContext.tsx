import { createContext, ReactNode, useContext, useState } from "react";

type DataProp = {
  children: ReactNode;
};

type FormData = {
  title: string;
  description: string;
  time: string;
};

type ListOfTasks = { tasks: any[] };

type DataContextType = {
  formData: FormData;
  listOfTasks: ListOfTasks;
  setFormData: (value: any) => void;
  setListOfTasks: (value: any) => void;
};

const initialFormData: FormData = {
  title: "",
  description: "",
  time: "",
};

const DataContext = createContext<DataContextType>({} as DataContextType);

const DataProvider = ({ children }: DataProp) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [listOfTasks, setListOfTasks] = useState<ListOfTasks>({ tasks: [] });

  return (
    <DataContext.Provider
      value={{ formData, setFormData, listOfTasks, setListOfTasks }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
