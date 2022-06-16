import "./TaskForm.css";

const TaskForm = () => {
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
            required
          />
        </li>
        <li className="unordered-list ">
          <textarea
            placeholder="Add Description"
            className="input-description"
            required
          />
        </li>
        <li className="unordered-list">
          <input
            type="text"
            placeholder="Add Time"
            className="input-title"
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
</div>)
}

export {TaskForm}