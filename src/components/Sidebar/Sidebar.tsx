import { ReactComponent as AllTasksIcon } from "../../assets/sidebar-icons/all-tasks.svg";
import { ReactComponent as InboxIcon } from "../../assets/sidebar-icons/inbox.svg";
import { ReactComponent as TodayIcon } from "../../assets/sidebar-icons/today.svg";
import { ReactComponent as UpcomingIcon } from "../../assets/sidebar-icons/upcoming.svg";
import { ReactComponent as ProjectIcon } from "../../assets/sidebar-icons/project.svg";
import { ReactComponent as TagIcon } from "../../assets/sidebar-icons/tag.svg";
import "./Sidebar.scss";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">to dos</h3>
      <div className="sidebar__filters sidebar__main-filters">
        <div className="sidebar__filter sidebar__main-filter">
          <AllTasksIcon />
          All tasks
        </div>
        <div className="sidebar__filter sidebar__main-filter">
          <InboxIcon />
          Inbox
        </div>
        <div className="sidebar__filter sidebar__main-filter">
          <TodayIcon />
          Today
        </div>
        <div className="sidebar__filter sidebar__main-filter">
          <UpcomingIcon />
          Upcoming
        </div>
      </div>
      <h3 className="sidebar__title">projects</h3>
      <div className="sidebar__filters sidebar__projects">
        <div className="sidebar__filter sidebar__project">
          <ProjectIcon />
          Project 1
        </div>
        <div className="sidebar__filter sidebar__project">
          <ProjectIcon />
          Project 1
        </div>
        <div className="sidebar__filter sidebar__project">
          <ProjectIcon />
          Project 1
        </div>
      </div>
      <h3 className="sidebar__title">filters & tags</h3>
      <div className="sidebar__filters sidebar__tags">
        <div className="sidebar__filter sidebar__tag">
          <TagIcon />
          Priority 1
        </div>
        <div className="sidebar__filter sidebar__tag">
          <TagIcon />
          Priority 1
        </div>
        <div className="sidebar__filter sidebar__tag">
          <TagIcon />
          Priority 1
        </div>
      </div>
    </div>
  );
}
