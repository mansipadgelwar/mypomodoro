export type FormData = {
    id?: string;
    title?: string;
    description?: string;
    time?: string;
    date?: string | number | Date;
    tags?: Tags[] 
  };

type Tags = {
  label: string;
  value: string;
}

export type DataContextType = {
    formData: FormData;
    setFormData: (value: any) => void;
    isEdited: boolean;
    setIsEdited: (value: boolean) => void;
    handleEditTask: (value: any) => void;
    editedListOfTasks: FormData;
    setEditedListOfTasks: (value: any) => void;
    selected: Tags[];
    setSelected: (value: any) => void;
  };

export type ListOfTasks = { tasks: FormData[],filteredTasks: FormData[] };

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
    }
    | {
      type: "FILTER_TASK";
      payload: any[];
    };;

export type Dispatch = (action: Action) => void;

export type ServiceContextType = {
  state: ListOfTasks;
  dispatch: Dispatch;
  isFiltered: boolean;
  setIsFiltered: (value: boolean) => void;
};