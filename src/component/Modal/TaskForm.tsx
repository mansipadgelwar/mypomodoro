import { useData, useService } from "../../context";
import "./TaskForm.css";
import { useToast } from "../../custom-hooks/useToast";
import { MultiSelect } from "react-multi-select-component";
import { useEffect } from "react";

type Show = {
  show: boolean;
  setShow: (value: boolean) => void;
  onClose: () => void;
};

type Options = {
  label: string;
  value: string;
}[];

const options: Options = [
  { label: "Personal 🧘🏻‍♀️", value: "personal" },
  { label: "Home 🏡", value: "home" },
  { label: "Office 👔", value: "office" },
  { label: "Gym 🏋🏻", value: "gym" },
];

const TaskForm = ({ show, onClose }: Show) => {
  const {
    formData,
    setFormData,
    isEdited,
    editedListOfTasks,
    setSelected,
    selected,
  } = useData();
  const { state, dispatch } = useService();
  const { showToast } = useToast();

  const handleEditTask = (event: any) => {
    event.preventDefault();
    const updateList = state.tasks.map((item) => {
      if (item.id === editedListOfTasks.id) {
        const updatedItem = {
          ...item,
          title: formData.title,
          description: formData.description,
          time: formData.time,
          tags: formData?.tags,
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
    const titleAlreadyExists = state.tasks.find(
      (item) => item.title === formData.title
    );
    if (!titleAlreadyExists) {
      if (formData.title && formData.description && formData.time) {
        dispatch({
          type: "SET_TASK",
          payload: formData,
        });
        setFormData("");
        setSelected("");
        onClose();
        showToast("Task added successfully", "success");
      } else {
        showToast("All fields are mandatory", "error");
      }
    } else {
      showToast("Task with the same title already exists.", "error");
    }
  };

  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      tags: selected,
    }));
  }, [selected, setFormData]);

  if (!show) {
    return null;
  }

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
            <li className="unordered-list">
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                hasSelectAll={true}
              />
            </li>
          </ul>
        </div>
        <div className="filter-modal-cta">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
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
