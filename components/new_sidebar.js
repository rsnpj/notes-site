import Select from "react-select";
const Sidebar = React.forwardRef((props, ref) => {
  const toggle = props.toggle ? "" : "hidden sm:block";
  var options = [
    { value: "year_1", label: "Year 1" },
    { value: "year_2", label: "Year 2" },
  ];
  return (
    <div
      className={`${toggle} absolute sm:relative w-full max-w-xs z-10 main-content`}
      ref={ref}
    >
      <div className="h-full p-4 overflow-x-hidden overflow-y-auto text-black bg-white border-r">
        <Select
          options={options}
          // onChange={handleChange}
          isClearable={false}
          isSearchable={false}
          instanceId={1}
        />
        <hr className="mt-4 mb-4" />
      </div>
    </div>
  );
});
export default Sidebar;
