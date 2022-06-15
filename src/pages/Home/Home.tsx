import "./Home.css"

const Home = () => {
return (
    <div className="home-page-container">
    <div className="h2 text-bold">Welcome back, Mansi!</div>
      <div className="h4">You have 4 tasks for todo. All the best!!</div>
      <div className="todo-list-wrapper">
        <div className="todo-list-heading">
          <p className="h2">To - Do List</p>
          <span className="material-icons">add_circle</span>
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
)
}

export {Home}