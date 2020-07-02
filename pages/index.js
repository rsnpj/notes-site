import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">Sam's notes</h1>
        <h3 className="text-center text-xl text-gray-600">
          Notes from my course at Durham University
        </h3>
      </div>
    </div>
  );
}
