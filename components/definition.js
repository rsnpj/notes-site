export default function definition(props) {
  return (
    <div className="border border-gray-400 rounded p-4 m-2">
      <span className="block text-2xl font-semibold text-black">
        {props.name}
      </span>
      <span>{props.children}</span>
    </div>
  );
}
