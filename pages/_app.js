import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../styles/index.css";
import Wrapper from "../components/wrapper";

const mdComponents = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
};

export default ({ Component, pageProps, allPostsData }) => (
  <Wrapper data={allPostsData}>
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  </Wrapper>
);
