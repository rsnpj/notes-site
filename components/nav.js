import Link from "next/link";
import NavItem from "./navitem";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  const [showMe, setShowMe] = React.useState(false);

  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <nav className="shadow bg-teal-500">
      <ul className="flex justify-between items-center p-4 text-white">
        <li>
          <Link href="/">
            <a className="no-underline">Home</a>
          </Link>
        </li>
        <NavItem year="Year One" />
        <NavItem year="Year Two" />
        <li>Year 3</li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
