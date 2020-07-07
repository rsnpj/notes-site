import Head from "next/head";
export default function Layout(frontMatter, allPostsData) {
  return ({ children: content }) => {
    return (
      <>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <div>
          <h1 className="text-center text-3xl underline">
            {frontMatter.title}
          </h1>
          <p>{allPostsData}</p>
          {content}
        </div>
      </>
    );
  };
}
