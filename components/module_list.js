export default function ModuleList(props) {
  //   if (props.module == undefined) {
  //     props.module = [];
  //   }
  console.log(typeof props.modules);
  return (
    <div className="divide-y divide-gray-400">
      {props.modules.map((element) => (
        <div className="text-center py-2">{element.replace(/_/g, " ")}</div>
      ))}
    </div>
  );
}
