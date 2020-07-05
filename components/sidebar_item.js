export default function SidebarItem(props) {
  var style = "text-xl";
  if (props.fileName.endsWith(".mdx")) {
    style = "text-base text-gray-700";
  }
  return (
    <div>
      <li className={style}>
        {props.fileName.replace(/_/g, " ").replace(/\.mdx$/, "")}
      </li>
      <ul>
        {props.subFolders.map((subFolder) => (
          <li className="pl-4 text-gray-700 text-base">
            {subFolder.replace(/_/g, " ").replace(/\.mdx$/, "")}
          </li>
        ))}
      </ul>
    </div>
  );
}
