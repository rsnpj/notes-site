import { useEffect, useRef } from "react";
export default function NavItem(props) {
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

  const [showMe, setShowMe] = React.useState(false);

  function toggle() {
    setShowMe(!showMe);
  }
  const node = useRef();
  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowMe(false);
  };
  //
  return (
    <li ref={node} className="relative">
      <button href="#" onClick={toggle}>
        <div
          className=""
          className={
            showMe
              ? "w-48 pt-3 pb-3 text-center align-middle bg-teal-700"
              : " w-48 pt-3 pb-3 text-center align-middle bg-teal-500 hover:bg-teal-700"
          }
        >
          {props.year}
        </div>
      </button>
      <div
        className="absolute bg-white text-black w-48 shadow-lg"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        {props.subFolders.map((number) => (
          <a href="#" className="block p-2 hover:bg-gray-200">
            {number}
          </a>
        ))}
      </div>
    </li>
  );
}
