import { createContext, ReactNode, useContext, useState } from "react";

type DataProp = {
  children: ReactNode;
};

type FormData = {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
};

type DataContextType = {
  formData: FormData;
  setFormData: (value: any) => void;
  isEdited: boolean;
  setIsEdited: (value: boolean) => void;
  handleEditTask: (value: any) => void;
  editedListOfTasks: FormData;
  setEditedListOfTasks: (value: any) => void;
};

const initialFormData: FormData = {
  id: "",
  title: "",
  description: "",
  time: "",
  date: "",
};

const DataContext = createContext<DataContextType>({} as DataContextType);

const DataProvider = ({ children }: DataProp) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isEdited, setIsEdited] = useState(false);
  const [editedListOfTasks, setEditedListOfTasks] =
    useState<FormData>(initialFormData);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
