const Sidebar = React.forwardRef((props, ref) => {
  const toggle = props.toggle ? "" : "hidden sm:block";
  return (
    <div
      className={`${toggle} absolute sm:relative w-full max-w-xs z-10 main-content`}
      ref={ref}
    >
      <div className="h-full p-4 overflow-x-hidden overflow-y-auto text-black bg-white border-r">
        <h1>Hello</h1>
        <hr className="mb-4" />
      </div>
    </div>
  );
});
export default Sidebar;
