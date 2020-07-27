import Select from "react-select";
import { useState } from "react";
const Sidebar = React.forwardRef((props, ref) => {
  const [year, setYear] = useState("");
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState(false);
  const toggle = props.toggle ? "" : "hidden sm:block";
  var options = props.tree.children.map((x) => ({
    value: x.name,
    label: x.name.replace(/_/g, " "),
  }));
  function handleChange(selected) {
    setModule(false);
    setYear(selected.value);
    console.log(props.tree);
    setModules(
      props.tree.children
        .find((x) => x.name === selected.value)
        .children.map((x) => x.name)
    );
  }

  function Module_layer() {
    return (
      <ul>
        {modules.map((element) => (
          <li key={element}>
            <button onClick={() => setModule(element)}>
              {element.replace(/_/g, " ")}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  function Submodule_layer() {
    return "Hiya";
  }

  function Switching() {
    if (module) {
      return <Submodule_layer />;
    } else {
      return <Module_layer />;
    }
  }

  return (
    <div
      className={`${toggle} absolute sm:relative w-full max-w-xs z-10 main-content`}
      ref={ref}
    >
      <div className="h-full p-4 overflow-x-hidden overflow-y-auto text-black bg-white border-r">
        <Select
          options={options}
          onChange={handleChange}
          isClearable={false}
          isSearchable={false}
          instanceId={1}
        />
        <hr className="mt-4 mb-4" />
        <Switching />
      </div>
    </div>
  );
});
export default Sidebar;
