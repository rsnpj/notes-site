import Head from "next/head";
export default function Layout(frontMatter) {
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
          {content}
        </div>
      </>
    );
  };
}
