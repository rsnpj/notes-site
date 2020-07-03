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
      <div
        className=""
        className={
          showMe
            ? "w-48 pt-3 pb-3 text-center align-middle bg-teal-700"
            : " w-48 pt-3 pb-3 text-center align-middle bg-teal-500"
        }
      >
        <a href="#" onClick={toggle}>
          {props.year}
        </a>
      </div>
      <div
        className="absolute bg-white text-black w-48"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <a href="#" className="block p-2">
          Maths for Computer Science
        </a>
        <a href="#" className="block p-2">
          Computer Systems
        </a>
      </div>
    </li>
  );
}
