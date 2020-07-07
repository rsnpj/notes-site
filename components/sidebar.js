import Select from "react-select";
import("../pages/notes/data.json").then((years) =>
  years["default"].forEach(append_dropdown)
);

var options = [];

function append_dropdown(item, index) {
  options.push({ value: item, label: item.replace(/_/g, " ") });
  //   console.log(test_options);
}

function Sidebar() {
  return (
    <div className="flex-none w-full max-w-xs text-black bg-gray-200 p-4 shadow-xl rounded-br">
      <Select options={options} />
      <hr className="mb-4" />
      <ul className="text-lg">
        <li>Content</li>
      </ul>
    </div>
  );
}

export default Sidebar;
