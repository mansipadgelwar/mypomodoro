import { useState, useEffect } from "react";
import { TaskForm } from "../../component";
import { useData, useService } from "../../context";
import "./Home.css";
import { useToast } from "../../custom-hooks/useToast";
import { NavLink } from "react-router-dom";

type FormData = {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
};

const Home = () => {
  const [show, setShow] = useState(false);
  const { setFormData, setIsEdited, setEditedListOfTasks } = useData();
  const { state, dispatch } = useService();
  const { showToast } = useToast();

  const handleDeleteTask = (task: FormData) => {
    const updatedListOfTasks = [...state.tasks].filter(
      (item) => item.id !== task.id
    );
    dispatch({ type: "DELETE_TASK", payload: updatedListOfTasks });
    showToast("Task deleted successfully", "success");
  };

  const handleUpdationOfTask = (event: any, task: FormData) => {
    event.preventDefault();
    event.stopPropagation();
    setFormData({
      title: task.title,
      description: task.description,
      time: task.time,
    });
    setIsEdited(true);
    setShow(true);
    setEditedListOfTasks(task);
  };

  const handleModal = () => {
    setIsEdited(false);
    setFormData("");
    setShow(true);
  };

  localStorage.setItem("listOfTasks", JSON.stringify(state.tasks));

  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <div>
      <TaskForm
        show={show}
        onClose={() => setShow(false)}
        setShow={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className={show ? "modal-background-page" : ""}>
        <div className="home-page-container">
          <div className="h2 text-bold">Welcome back, Mansi!</div>
          <div className="h4">{`You have ${state.tasks.length} tasks for todo. All the best!!`}</div>
          <div className="todo-list-wrapper">
            <div className="todo-list-heading">
              <p className="h2 text-bold">To - Do List</p>
              <span className="material-icons" onClick={() => handleModal()}>
                add_circle
              </span>
            </div>
            <div className="todo-lists-container">
              <ul className="todo-unordered-lists">
                {state.tasks.map((task) => {
                  return (
                    <li className="todos h4" key={task.id}>
                      <NavLink
                        to={`/pomodoro/${task.id}`}
                        className="task-title"
                      >
                        <p>{task.title}</p>
                      </NavLink>
                      <div>
                        <span
                          className="material-icons"
                          onClick={(event) => handleUpdationOfTask(event, task)}
                        >
                          edit_note
                        </span>
                        <span
                          className="material-icons"
                          onClick={() => handleDeleteTask(task)}
                        >
                          delete
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
