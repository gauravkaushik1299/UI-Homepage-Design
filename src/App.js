import React from "react";
import "./App.css"; // Global styles
import "./fontAwesome";
import TopBar from "./Components/TopBar/TopBar";
import Sidebar from "./Components/SideBar/SideBar";
import Feed from "./Components/Feed/Feed";
import RightSidebar from "./Components/RightSideBar/RightSideBar";

function App() {
  return (
    <div className="app-container">
      {/* Top bar component */}
      <TopBar />
      <div className="content-layout">
        {/* Sidebar component */}
        <Sidebar />
        {/* Feed component */}
        <Feed />
        {/* Right sidebar component */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
