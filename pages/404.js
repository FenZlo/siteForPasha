import Head from "next/head";
import Heading from "../components/Heading";

function Error() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading tag="h2" text="VVedi pravil'no nazvanie stranici" />
    </>
  );
}

export default Error;
