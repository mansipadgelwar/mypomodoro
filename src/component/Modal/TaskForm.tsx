import { useState } from "react";
import { uuid } from "uuidv4";
import "./TaskForm.css";

type FormData = {
  id: string;
  title: string;
  description: string;
  time: string;
};

const initialFormData: FormData = {
  id: uuid(),
  title: "",
  description: "",
  time: "",
};

const TaskForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

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
                  setFormData((prev) => ({
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
                  setFormData((prev) => ({
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
                  setFormData((prev) => ({
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
          <button className="btn btn-cta">Done</button>
        </div>
      </div>
    </div>
  );
};

export { TaskForm };
