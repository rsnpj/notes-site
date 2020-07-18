function Sidebar(props) {
  const toggle = props.toggle ? "" : "hidden sm:block";

  return (
    <div
      className={`${toggle} absolute sm:relative w-full max-w-xs z-10 main-content`}
      ref={props.node}
    >
      <div className="text-black bg-white overflow-y-auto p-4 border-r h-full overflow-x-hidden">
        <h1>Hello</h1>
        <hr className="mb-4" />
      </div>
    </div>
  );
}

export default Sidebar;
