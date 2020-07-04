import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData, sidebar } from "../../lib/posts";
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

export default function IndexPage({ allPostsData, sidebarReturn }) {
  const router = useRouter();
  const { module, year } = router.query;
  return (
    <div>
      <Head>
        <title>Sam's notes</title>
      </Head>
      <Nav years={allPostsData} selectedYear={year} />

      <div className="flex">
        <div className="flex-none w-full max-w-xs text-black bg-white p-4 shadow-xl rounded-br">
          <h2 className="text-2xl mb-4">{module.replace(/_/g, " ")}</h2>
          <hr className="mb-4" />
          <ul className="text-lg">
            {sidebarReturn.map(({ fileName, subFolders }) => (
              <li>{fileName}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-black ">Main content area</div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const allPostsData = getSortedPostsData();
  const sidebarReturn = sidebar(context);
  return {
    props: {
      allPostsData,
      sidebarReturn,
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
