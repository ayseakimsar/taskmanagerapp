import { ReactComponent as FilterIcon } from "../../assets/topbar-icons/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/topbar-icons/sort.svg";
import { ReactComponent as ViewIcon } from "../../assets/topbar-icons/view.svg";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__task-group-name">Project 1</div>
      <div className="topbar__buttons">
        <button className="topbar__button topbar__button--view">
          <div className="topbar__icon">
            <ViewIcon />
          </div>
          <span className="topbar__text">View</span>
        </button>
        <button className="topbar__button topbar__button--filter">
          <div className="topbar__icon">
            <FilterIcon />
          </div>
          <span className="topbar__text">Filter</span>
        </button>
        <button className="topbar__button topbar__button--sort">
          <div className="topbar__icon">
            <SortIcon />
          </div>
          <span className="topbar__text">Sort</span>
        </button>
      </div>
    </div>
  );
}
