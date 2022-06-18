import { useData, useService } from "../../context";
import "./TaskForm.css";
import { useToast } from "../../custom-hooks/useToast";

type Show = {
  show: boolean;
  setShow: (value: boolean) => void;
  onClose: () => void;
};

const TaskForm = ({ show, onClose }: Show) => {
  const { formData, setFormData, isEdited, editedListOfTasks } = useData();
  const { state, dispatch } = useService();
  const { showToast } = useToast();

  if (!show) {
    return null;
  }

  const handleEditTask = (event: any) => {
    event.preventDefault();
    const updateList = state.tasks.map((item) => {
      if (item.id === editedListOfTasks.id) {
        const updatedItem = {
          ...item,
          title: formData.title,
          description: formData.description,
          time: formData.time,
        };
        return updatedItem;
      }
      return item;
    });
    dispatch({ type: "UPDATE_TASK", payload: updateList });
    showToast("Task updated successfully", "success");
    onClose();
  };

  const handleTaskDetail = (event: any) => {
    event.preventDefault();
    dispatch({ type: "SET_TASK", payload: formData });
    showToast("Task added successfully", "success");
    setFormData("");
    onClose();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-heading">
          <div>
            <button className="modal-close-icon" onClick={onClose}>
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
        <div className="modal-contents">
          <ul className="modal-content-list">
            <li className="unordered-list ">
              <input
                type="text"
                placeholder="Add Title"
                className="input-title"
                onChange={(event) =>
                  setFormData((prev: any) => ({
                    ...prev,
                    title: event.target.value,
                  }))
                }
                value={formData.title}
                required
              />
            </li>
            <li className="unordered-list ">
              <textarea
                placeholder="Add Description"
                className="input-description"
                onChange={(event) =>
                  setFormData((prev: any) => ({
                    ...prev,
                    description: event.target.value,
                  }))
                }
                value={formData.description}
                required
              />
            </li>
            <li className="unordered-list">
              <input
                type="number"
                placeholder="Add time in seconds"
                className="input-title"
                onChange={(event) =>
                  setFormData((prev: any) => ({
                    ...prev,
                    time: event.target.value,
                  }))
                }
                value={formData.time}
                required
              />
            </li>
          </ul>
        </div>
        <div className="filter-modal-cta">
          <button className="btn">Cancel</button>
          <button
            className="btn btn-cta"
            onClick={(event) =>
              isEdited ? handleEditTask(event) : handleTaskDetail(event)
            }
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export { TaskForm };
