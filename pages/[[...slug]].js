import { useState, useRef, useEffect } from "react";
import MainContent from "../components/main_content";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";
import { getTree, getPaths } from "../lib/tree";
import Head from "next/head";
import { useRouter } from "next/router";
import renderMathInElement from "katex/dist/contrib/auto-render.mjs";
import HomePage from "../components/homepage";
import dynamic from "next/dynamic";
function Lecture({ tree, postData, params }) {
  var DynamicComponent;
  if (params.slug !== undefined) {
    DynamicComponent = dynamic(() =>
      import(`../notes/${params.slug.join("/")}.md`)
    );
  }
  const router = useRouter();
  const node = useRef();
  const node2 = useRef();
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

  useEffect(() => {
    router.events.on("routeChangeComplete", function () {
      setSidebarVisible(false);
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
      });
    });
  }, []);

  useEffect(() => {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
    });
  }, []);

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
      <Head>
        <title>Sam's Notes</title>
      </Head>
      <NavBar toggleFunction={toggleSidebar} ref={node2} />
      <div className="sm:flex main-content">
        <Sidebar toggle={sidebarVisible} ref={node} tree={tree} />
        <MainContent toggle={sidebarVisible}>
          {params.slug && (
            <>
              <div className="p-6 pt-24 pb-12">
                <h1 className="text-4xl sm:text-6xl text-center font-semibold">
                  Fancy title
                </h1>
                <h2 className="text-center text-lg text-gray-700">
                  {params.slug[1].replace(/_/g, " ")}
                </h2>
              </div>
              <hr className="pb-4" />
              <div className="flex justify-center">
                <div className="prose container pb-6">
                  <DynamicComponent />
                </div>
              </div>
            </>
          )}
          {params.slug === undefined && (
            <div className="p-6 pt-24 pb-12 flex justify-center">
              <HomePage />
            </div>
          )}
        </MainContent>
      </div>
    </>
  );
}

export default Lecture;

export async function getStaticProps({ params }) {
  const tree = getTree();
  return {
    props: {
      tree,
      params,
    },
  };
}

export async function getStaticPaths() {
  const paths = getPaths();
  return {
    paths: paths,
    fallback: false,
  };
}
