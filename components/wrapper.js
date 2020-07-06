import Head from "next/head";
import Link from "next/link";

export default ({ pathname, children, allPostsData }) => {
  return (
    <div>
      {/* <Head>
        <title>Sam's notes</title>
      </Head> */}
      <nav className="bg-teal-400 shadow p-4">
        <ul class="flex">
          <li class="mr-6">
            <Link href="/">
              <a class="text-blue-500 hover:text-blue-800">Home</a>
            </Link>
          </li>
          <li class="mr-6">
            <Link href="/docs">
              <a class="text-blue-500 hover:text-blue-800">Docs</a>
            </Link>
          </li>
          <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li class="mr-6">
            <a class="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
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
