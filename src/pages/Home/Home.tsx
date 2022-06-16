import { useState } from "react";
import { TaskForm } from "../../component";
import { useData } from "../../context/dataContext";
import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const { listOfTasks } = useData();

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
          <div className="h4">You have 4 tasks for todo. All the best!!</div>
          <div className="todo-list-wrapper">
            <div className="todo-list-heading">
              <p className="h2 text-bold">To - Do List</p>
              <span className="material-icons" onClick={() => setShow(true)}>
                add_circle
              </span>
            </div>
            <div className="todo-lists-container">
              <ul className="todo-unordered-lists">
                {listOfTasks.tasks.map(({ id, title }) => {
                  return (
                    <li className="todos h4" key={id}>
                      <p>{title}</p>
                      <div>
                        <span className="material-icons">edit_note</span>
                        <span className="material-icons">delete</span>
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
