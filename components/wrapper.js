import Head from "next/head";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

// import { frontMatter } from "../pages/**/*.md";
var myList = [];
// import("../pages/notes/data.json").then((module) => {
//   myList += module["default"];
//   import("../pages/notes/" + module["default"] + "/data.json").then(
//     (module) => (myList += module["default"])
//   );
// });
export default ({ pathname, children, data }) => {
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
  const [navVisible, setNavVisible] = useState(false);
  const node = useRef();
  const node2 = useRef();
  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target) || node2.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setNavVisible(false);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div className="h-screen">
      <nav
        ref={node2}
        className="bg-white shadow p-4 h-12 border-b border-gray-200"
      >
        <ul className="float-left">
          <li className="mr-6 visible sm:hidden">
            <button onClick={() => setNavVisible(!navVisible)}>
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </li>
          <li className="hidden sm:block">Sam's Notes</li>
        </ul>
        <ul className="float-right pr-4">
          <li>
            <a href="https://github.com/samrobbins85/notes-site">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div className="sm:flex sm:main-content">
          <div
            className={
              navVisible
                ? " block w-full max-w-xs z-10"
                : " hidden sm:block w-full max-w-xs z-10"
            }
            ref={node}
          >
            <Sidebar />
          </div>
          {/* <div className={navVisible ? "sm:hidden block " : "sm:hidden"}>
          <div className="relative flex-none h-screen w-1 text-black bg-gray-200 p-4  rounded-br overflow-scroll">
            Hi
          </div>
        </div> */}
          <div className="sm:flex-1 text-black h-screen bg-white p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
