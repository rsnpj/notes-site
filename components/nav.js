import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav className="shadow bg-teal-500">
      <ul className="flex justify-between items-center p-4 text-white">
        <li>
          <Link href="/">
            <a className="no-underline">Home</a>
          </Link>
        </li>
        <li className="relative">
          <a href="#">Year 1</a>
          <div className="absolute bg-gray-400 text-black w-48 rounded-md">
            <a href="#" className="block">
              Maths for Computer Science
            </a>
            <a href="#" className="block">
              Computer Systems
            </a>
          </div>
        </li>
        <li>Year 2</li>
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
