import { v4 as uuidv4 } from "uuid";

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

const taskReducer = (state: ListOfTasks, action: Action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: uuidv4(), date: Date().toLocaleString() },
        ],
      };
    case "DELETE_TASK":
      return { ...state, tasks: action.payload };

    case "UPDATE_TASK":
      return { ...state, tasks: action.payload };

    default:
      return state;
  }
};

export { taskReducer };
