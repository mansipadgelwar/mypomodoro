import { useState } from "react";
import { TaskForm } from "../../component";
import "./Home.css";

// type Show = {
//   show: boolean;
//   setShow: (value: boolean) => void;
//   onClose: () => void;
// };

const Home = () => {
  const [show, setShow] = useState(false);

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
                <li className="todos h4">
                  <p>Math Homework</p>
                  <div>
                    <span className="material-icons">edit_note</span>
                    <span className="material-icons">delete</span>
                  </div>
                </li>
                <li className="todos h4">
                  <p>English Homework</p>
                  <div>
                    <span className="material-icons">edit_note</span>
                    <span className="material-icons">delete</span>
                  </div>
                </li>
                <li className="todos h4">
                  <p>Science Homework</p>
                  <div>
                    <span className="material-icons">edit_note</span>
                    <span className="material-icons">delete</span>
                  </div>
                </li>
                <li className="todos h4">
                  <p>Geography Homework</p>
                  <div>
                    <span className="material-icons">edit_note</span>
                    <span className="material-icons">delete</span>
                  </div>
                </li>
                <li className="todos">
                  <p>Math Homework</p>
                  <div>
                    <span className="material-icons">edit_note</span>
                    <span className="material-icons">delete</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
