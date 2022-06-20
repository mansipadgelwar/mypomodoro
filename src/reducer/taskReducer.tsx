import { v4 as uuidv4 } from "uuid";
import { ListOfTasks, Action } from "../types/data.type";

const taskReducer = (state: ListOfTasks, action: Action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: uuidv4(), date: new Date().getTime() },
        ],
      };
    case "DELETE_TASK":
      return { ...state, tasks: action.payload };

    case "UPDATE_TASK":
      return { ...state, tasks: action.payload };

    case "FILTER_TASK":
      return { ...state, filteredTasks: action.payload };

    default:
      return state;
  }
};

export { taskReducer };
