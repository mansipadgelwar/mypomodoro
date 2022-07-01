import { ListOfTasks, Action } from "../types/data.type";
import { v4 as uuidv4 } from "uuid";

const taskReducer = (state: ListOfTasks, action: Action) => {
  switch (action.type) {
    case "SET_TASK":
      if (action.payload?.tags === undefined || action.payload.tags === []) {
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              ...action.payload,
              id: uuidv4(),
              date: new Date().getTime(),
              tags: [{ label: "Personal 🧘🏻‍♀️", value: "personal" }],
            },
          ],
        };
      }
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
