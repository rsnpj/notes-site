import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import("../pages/notes/data.json").then((years) =>
  years["default"].forEach(append_dropdown)
);

var options = [];

function append_dropdown(item, index) {
  options.push({ value: item, label: item.replace(/_/g, " ") });
  //   console.log(test_options);
}

function Sidebar() {
  const [count, setCount] = useState([""]);
  const [module, setModule] = useState(false);

  function selectModule(element) {
    setModule(element);
  }

  function Module_layer() {
    return (
      <div className="divide-y divide-gray-400">
        {count.map((element) => (
          <div className="text-center py-2" key={element}>
            <button onClick={() => selectModule(element)}>
              {element.replace(/_/g, " ")}
            </button>
          </div>
        ))}
      </div>
    );
  }

  function Submodule_layer() {
    return <h1>{module}</h1>;
  }

  function Switching() {
    if (module) {
      return <Submodule_layer />;
    } else {
      return <Module_layer />;
    }
  }

  // This function sets the state to the modules to be listed, it might be nicer to have the state be the year, and the fetching be handled in the component
  function handleChange(selectedOption) {
    import(
      "../pages/notes/" + selectedOption.value + "/data.json"
    ).then((module) => setCount(module["default"]));
    setModule(false);
  }
  return (
    <div className="flex-none w-full max-w-xs text-black bg-gray-200 p-4 shadow-xl rounded-br">
      <Select
        options={options}
        onChange={handleChange}
        isClearable={false}
        isSearchable={false}
        instanceId={1}
      />
      <hr className="mb-4" />
      <Switching />
    </div>
  );
}

export default Sidebar;
