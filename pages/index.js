import Nav from "../components/nav";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function IndexPage({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Sam's notes</title>
      </Head>
      <Nav years={allPostsData} />
      <div className="hero">
        <h1 className="title">Sam's notes</h1>
        <h3 className="text-center text-xl text-gray-600">
          Notes from my course at Durham University
        </h3>
      </div>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
