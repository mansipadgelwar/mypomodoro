import { useState, useEffect } from "react";
import { TaskForm, FilterForm } from "../../component";
import { useData, useService } from "../../context";
import "./Home.css";
import { useToast } from "../../custom-hooks/useToast";
import { NavLink } from "react-router-dom";
import { FormData } from "../../types/data.type";

const Home = () => {
  const [show, setShow] = useState(false);
  const { setFormData, setIsEdited, setEditedListOfTasks, setSelected } =
    useData();
  const { state, dispatch, setIsFiltered, isFiltered } = useService();
  const { showToast } = useToast();
  const [showFilter, setShowFilter] = useState(false);
  let refresh = window.localStorage.getItem("refresh");
  if (refresh === null) {
    window.location.reload();
    window.localStorage.setItem("refresh", "1");
  }

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
    setIsFiltered(false);
    setFormData({
      title: task.title,
      description: task.description,
      time: task.time,
      tags: setSelected(task.tags ? task.tags : []),
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

  useEffect(() => {
    document.title = `Home`;
    localStorage.setItem(
      "listOfTasks",
      JSON.stringify(state.tasks && state.tasks)
    );
  }, [state.tasks]);

  return (
    <div>
      <TaskForm
        show={show}
        onClose={() => setShow(false)}
        setShow={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />

      <FilterForm
        showFilter={showFilter}
        onClosingFilter={() => setShowFilter(false)}
        setShowFilter={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className={show ? "modal-background-page" : ""}>
        <div className="home-page-container">
          <div className="h2 text-bold">Welcome back, Mansi!</div>
          <div className="h4">{`You have ${
            state.tasks?.length || 0
          } tasks for todo. All the best!!`}</div>
          <div className="todo-list-wrapper">
            <div className="todo-list-heading">
              <p className="h2 text-bold">To - Do List</p>
              <div className="todo-heading-menu">
                <span className="material-icons" onClick={() => handleModal()}>
                  add_circle
                </span>
                <span
                  className="material-icons"
                  onClick={() => setShowFilter(true)}
                >
                  tune
                </span>
              </div>
            </div>
            <div className="todo-lists-container">
              <ul className="todo-unordered-lists">
                {isFiltered && state.filteredTasks
                  ? state.filteredTasks.map((task) => {
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
                              onClick={(event) =>
                                handleUpdationOfTask(event, task)
                              }
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
                    })
                  : state.tasks &&
                    // eslint-disable-next-line array-callback-return
                    state.tasks?.map((task, index) => {
                      if (index >= 0) {
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
                                onClick={(event) =>
                                  handleUpdationOfTask(event, task)
                                }
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
                      }
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
