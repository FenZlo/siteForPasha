import Head from "next/head";
import "@/styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
