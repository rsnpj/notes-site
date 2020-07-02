export default function NavItem(props) {
  const [showMe, setShowMe] = React.useState(false);

  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <li className="relative">
      <a href="#" onClick={toggle}>
        {props.year}
      </a>
      <div
        className="absolute bg-gray-400 text-black w-48 rounded-md"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <a href="#" className="block">
          Maths for Computer Science
        </a>
        <a href="#" className="block">
          Computer Systems
        </a>
      </div>
    </li>
  );
}
