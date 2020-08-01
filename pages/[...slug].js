import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import MainContent from "../components/main_content";
import Sidebar from "../components/new_sidebar";
import NavBar from "../components/navbar";
import { getTree } from "../lib/tree";

function Lecture({ tree }) {
  const node = useRef();
  const node2 = useRef();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }
  const router = useRouter();
  const slug = router.query.slug || [];
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

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target) || node2.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setSidebarVisible(false);
  };
  return (
    <>
      <NavBar toggleFunction={toggleSidebar} ref={node2} />
      <div className="sm:flex main-content">
        <Sidebar toggle={sidebarVisible} ref={node} tree={tree} />
        <MainContent toggle={sidebarVisible}>
          Welcome to Next.js! Here is some more content to check if it is
          properly underneath
        </MainContent>
      </div>
      <h1>Slug: {slug.join("/")}</h1>
    </>
  );
}

export default Lecture;

export async function getStaticProps() {
  const tree = getTree();
  return {
    props: {
      tree,
    },
  };
}

export async function getStaticPaths(slug) {
  return {
    paths: [
      {
        params: {
          slug: [
            "Year_1",
            "Algorithms_and_Data_Structures",
            "Part_1",
            "Arrays",
          ],
        },
      }, // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  };
}
