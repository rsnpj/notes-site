import NavBar from "../components/navbar";
import Sidebar from "../components/new_sidebar";
function HomePage() {
  return (
    <>
      <NavBar />
      <div className="sm:flex main-content">
        <div className="absolute sm:relative w-full max-w-xs z-10 main-content">
          <Sidebar />
        </div>
        <div className=" z-0 sm:flex-1 bg-white main-content p-4">
          Welcome to Next.js! Here is some more content to check if it properly
          underneath
        </div>
      </div>
    </>
  );
}

export default HomePage;
