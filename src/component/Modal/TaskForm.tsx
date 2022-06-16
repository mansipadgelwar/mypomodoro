import { v4 as uuidv4 } from "uuid";
import { useData } from "../../context/dataContext";
import "./TaskForm.css";

const TaskForm = () => {
  const { formData, setListOfTasks, setFormData } = useData();

  const handleTaskDetail = (event: any) => {
    event.preventDefault();
    setListOfTasks((prev: any) => {
      const updatedTasks = prev.tasks.concat({
        id: uuidv4(),
        title: formData.title,
        description: formData.description,
        time: formData.time,
      });
      console.log({ updatedTasks });
      return { ...prev, tasks: updatedTasks };
    });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-heading">
          <div>
            <button className="modal-close-icon">
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
                placeholder="Add Time"
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
          <button className="btn ">Cancel</button>
          <button
            className="btn btn-cta"
            onClick={(event) => handleTaskDetail(event)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export { TaskForm };
