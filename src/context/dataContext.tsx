import { createContext, ReactNode, useContext, useState } from "react";
import { FormData, DataContextType } from "../types/data.type";

type DataProp = {
  children: ReactNode;
};

const initialFormData: FormData = {
  id: "1234",
  title: "sample data",
  description: "sample description",
  time: "100",
  date: new Date().toLocaleTimeString(),
  tags: [],
};

const DataContext = createContext<DataContextType>({} as DataContextType);

const DataProvider = ({ children }: DataProp) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isEdited, setIsEdited] = useState(false);
  const [editedListOfTasks, setEditedListOfTasks] =
    useState<FormData>(initialFormData);
  const [selected, setSelected] = useState([]);

  const handleEditTask = (event: any) => {
    event.preventDefault();
  };

  return (
    <DataContext.Provider
      value={{
        formData,
        setFormData,
        isEdited,
        setIsEdited,
        handleEditTask,
        setEditedListOfTasks,
        editedListOfTasks,
        selected,
        setSelected,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
