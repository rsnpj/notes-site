import Head from "next/head";
import Link from "next/link";
// import { frontMatter } from "../pages/**/*.md";
var myList = [];
import("../pages/notes/data.json").then((module) => {
  myList += module["default"];
  import("../pages/notes/" + module["default"] + "/data.json").then(
    (module) => (myList += module["default"])
  );
});
export default ({ pathname, children, data }) => {
  // console.log({ frontMatter });
  return (
    <div>
      {/* <Head>
        <title>Sam's notes</title>
      </Head> */}
      <nav className="bg-teal-400 shadow p-4">
        <ul className="flex">
          <li className="mr-6">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800">Home</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/docs">
              <a className="text-blue-500 hover:text-blue-800">Docs</a>
            </Link>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
      <p>{myList}</p>
      <div className="flex">
        <div className="flex-none w-full max-w-xs text-black bg-gray-200 p-4 shadow-xl rounded-br">
          <h2 className="text-2xl mb-4">Sidebar</h2>
          <hr className="mb-4" />
          <ul className="text-lg">
            <li>List</li>
          </ul>
        </div>
        <div className="flex-1 text-black p-4 h-screen bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};
