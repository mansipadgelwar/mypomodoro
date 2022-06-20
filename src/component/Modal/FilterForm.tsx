import "./TaskForm.css";
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import { useService } from "../../context";

type ShowFilter = {
  showFilter: boolean;
  setShowFilter: (value: boolean) => void;
  onClosingFilter: () => void;
};

const options = [
  { label: "Personal", value: "personal" },
  { label: "Home", value: "home" },
  { label: "Office", value: "office" },
  { label: "Gym", value: "gym" },
];

const FilterForm = ({ onClosingFilter, showFilter }: ShowFilter) => {
  const [selectedTag, setSelectedTag] = useState<any[]>([]);
  const { state, dispatch, setIsFiltered } = useService();

  const handleFilter = (event: any) => {
    event.preventDefault();
    setIsFiltered(true);
    const selectedFilterOptions = selectedTag.map(
      (element: any) => element.value
    );

    const filteredTask = state.tasks.filter((element: any) =>
      element.tags.find((item: any) => {
        return selectedFilterOptions.some((label: any) => label === item.value);
      })
    );
    dispatch({ type: "FILTER_TASK", payload: filteredTask });
    onClosingFilter();
  };

  const handleCloseFilterModal = (event: any) => {
    event.preventDefault();
    setSelectedTag([]);
    setIsFiltered(false);
    onClosingFilter();
  };

  if (!showFilter) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-heading">
          <div>
            <button className="modal-close-icon" onClick={onClosingFilter}>
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
        <div className="modal-contents">
          <ul className="modal-content-list">
            <li className="unordered-list">
              <label className="text-bold">Filter by tags</label>
              <MultiSelect
                options={options}
                value={selectedTag}
                onChange={setSelectedTag}
                labelledBy="Select"
              />
            </li>
          </ul>
        </div>
        <div className="filter-modal-cta">
          <button
            className="btn"
            onClick={(event) => handleCloseFilterModal(event)}
          >
            Cancel
          </button>
          <button
            className="btn btn-cta"
            onClick={(event) => handleFilter(event)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export { FilterForm };
