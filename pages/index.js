import NavBar from "../components/navbar";
import Sidebar from "../components/new_sidebar";
import MainContent from "../components/main_content";
import { useState, useEffect, useRef } from "react";

function HomePage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const node = useRef();
  const node2 = useRef();
  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setSidebarVisible(false);
  };

  return (
    <>
      <NavBar toggleFunction={toggleSidebar} />
      <div className="sm:flex main-content">
        <Sidebar toggle={sidebarVisible} ref={node} />
        <MainContent toggle={sidebarVisible}>
          Welcome to Next.js! Here is some more content to check if it is
          properly underneath
        </MainContent>
      </div>
    </>
  );
}

export default HomePage;
