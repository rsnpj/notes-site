import { useState, useRef, useEffect } from "react";
import MainContent from "../components/main_content";
import Sidebar from "../components/new_sidebar";
import NavBar from "../components/navbar";
import { getTree, getPaths } from "../lib/tree";
import { getPostData } from "../lib/lecture";
import Head from "next/head";
function Lecture({ tree, postData, params }) {
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
      </Head>
      <NavBar toggleFunction={toggleSidebar} ref={node2} />
      <div className="sm:flex main-content">
        <Sidebar toggle={sidebarVisible} ref={node} tree={tree} />
        <MainContent toggle={sidebarVisible}>
          <div className="p-6">
            <h1 className="text-5xl text-center font-semibold">
              {postData.title}
            </h1>
            <h2 className="text-center text-lg text-gray-700">
              {params.slug[1].replace(/_/g, " ")}
            </h2>
          </div>
          <hr className="pb-4" />
          <div className="flex justify-center">
            <div
              className="prose container"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>
        </MainContent>
      </div>
    </>
  );
}

export default Lecture;

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const tree = getTree();
  return {
    props: {
      tree,
      postData,
      params,
    },
  };
}

export async function getStaticPaths(slug) {
  const paths = getPaths();
  return {
    paths: paths,
    fallback: false, // See the "fallback" section below
  };
}
