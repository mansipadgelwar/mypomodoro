export type FormData = {
    id: string;
    title: string | undefined;
    description: string | undefined;
    time: string | undefined;
    date: string | undefined;
  };

export type DataContextType = {
    formData: FormData;
    setFormData: (value: any) => void;
    isEdited: boolean;
    setIsEdited: (value: boolean) => void;
    handleEditTask: (value: any) => void;
    editedListOfTasks: FormData;
    setEditedListOfTasks: (value: any) => void;
  };

export type ListOfTasks = { tasks: any[] };

export type Action =
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

export type Dispatch = (action: Action) => void;

export type ServiceContextType = {
  state: ListOfTasks;
  dispatch: Dispatch;
};