import "./Main.scss";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

export default function Main() {
  return (
    <div className="main">
      <div className="main__navbar">
        <Navbar />
      </div>
      <div className="main__topbar">
        <Topbar />
      </div>
      <div className="main__sidebar">
        <Sidebar />
      </div>
      <div className="main__main-content">
        <MainContent />
      </div>
    </div>
  );
}
