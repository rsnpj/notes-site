import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import Nav from "../../components/nav";

// const Post = () => {
//   const router = useRouter();
//   const { module, year } = router.query;

//   return (
//     <p>
//       Post: {module} and {year}
//     </p>
//   );
// };

// export default Post;

export default function IndexPage({ allPostsData }) {
  const router = useRouter();
  const { module, year } = router.query;
  return (
    <div>
      <Head>
        <title>Sam's notes</title>
      </Head>
      <Nav years={allPostsData} selectedYear={year} />
      <div className="hero">
        <h1 className="title">Sam's notes</h1>
        <h3 className="text-center text-xl text-gray-600">
          Notes from my course at Durham University
        </h3>
      </div>
      {/* <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul> */}
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { year: "Year_1", module: "Algorithms_and_Data_Structures" } },
      { params: { year: "Year_2", module: "Algorithms_and_Data_Structures" } },
    ],
    fallback: false, // See the "fallback" section below
  };
}
