import { ReactComponent as UserIcon } from "../../assets/navigation-icons/user.svg";
import { ReactComponent as ToDoListIcon } from "../../assets/navigation-icons/todo-list.svg";
import { ReactComponent as HabitTrackerIcon } from "../../assets/navigation-icons/habit-tracker.svg";
import { ReactComponent as ArchieveIcon } from "../../assets/navigation-icons/archieve.svg";
import { ReactComponent as SettingsIcon } from "../../assets/navigation-icons/settings.svg";
import "./Navbar.scss";

export default function Navigation() {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <button className="navbar__nav-item navbar__nav-item--todo">
          <ToDoListIcon />
        </button>

        <button className="navbar__nav-item navbar__nav-item--habit-tracker">
          <HabitTrackerIcon />
        </button>

        <button className="navbar__nav-item navbar__nav-item--archieve">
          <ArchieveIcon />
        </button>
      </nav>
      <div className="navbar__user-actions">
        <button className="navbar__nav-item navbar__nav-item--login-button">
          <UserIcon />
        </button>
        <button className="navbar__nav-item navbar__nav-item--settings-button">
          <SettingsIcon />
        </button>
      </div>
    </div>
  );
}
