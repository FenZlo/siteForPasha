import Head from "next/head";
import Heading from "../components/Heading";

function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Post list:" />
      <Heading tag="p" text="Lorem do someshing wrong dirty things" />
    </>
  );
}

export default Posts;
