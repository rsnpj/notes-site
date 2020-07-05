import { useEffect, useRef } from "react";
import Link from "next/link";
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
  // This sets the default background colour to teal-500 with teal-700 on hover, but if it is in the URL then will always be teal-700
  var default_background = " bg-teal-500 hover:bg-teal-700";
  if (props.year === props.selectedYear) {
    default_background = " bg-teal-700";
  }
  // Set the standard proprties to make the code cleaner, not sure if there's an inline way to do this
  const standard_properties = "w-48 pt-3 pb-3 text-center align-middle";

  return (
    <li ref={node} className="relative">
      <button href="#" onClick={toggle}>
        <div
          className=""
          className={
            showMe
              ? standard_properties + " bg-teal-700"
              : standard_properties + default_background
          }
        >
          {props.year.replace(/_/g, " ")}
        </div>
      </button>
      <div
        className="absolute bg-white text-black w-48 shadow-lg"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        {props.subFolders.map((number) => (
          <Link href={"/" + props.year + "/" + number}>
            <a className="block p-2 hover:bg-gray-200">
              {number.replace(/_/g, " ")}
            </a>
          </Link>
        ))}
      </div>
    </li>
  );
}
