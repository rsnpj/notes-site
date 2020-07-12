import NavBar from "../components/navbar";
import Sidebar from "../components/new_sidebar";
import MainContent from "../components/main_content";
import { useState } from "react";

function HomePage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <>
      <NavBar toggleFunction={toggleSidebar} />
      <div className="sm:flex main-content">
        <Sidebar toggle={sidebarVisible} />
        <MainContent toggle={sidebarVisible}>
          Welcome to Next.js! Here is some more content to check if it is
          properly underneath
        </MainContent>
      </div>
    </>
  );
}

export default HomePage;
