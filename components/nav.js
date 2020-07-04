import Link from "next/link";
import NavItem from "./navitem";
// import getYears from "../lib/years";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav(props) {
  const [showMe, setShowMe] = React.useState(false);

  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <nav className="shadow bg-teal-500">
      <ul className="flex justify-left items-center text-white">
        <li className="pl-4 pr-4">
          <Link href="/">
            <a className="no-underline">Home</a>
          </Link>
        </li>
        {props.years.map(({ fileName, subFolders }) => (
          <NavItem
            year={fileName}
            subFolders={subFolders}
            selectedYear={props.selectedYear}
          />
        ))}
        {/* {getYears.map(({ fileName }) => (
          <NavItem year={{ fileName }} />
        ))} */}
        {/* <NavItem year="Year One" />
        <NavItem year="Year Two" />
        <NavItem year="Year Three" /> */}
        {/* <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul> */}
      </ul>
    </nav>
  );
}

// export async function getStaticProps() {
//   const getYears = getYears();
//   return {
//     props: {
//       getYears,
//     },
//   };
// }
