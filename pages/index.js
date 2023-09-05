import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="Hello world!" />
      </div>
    </>
  );
}

export default Home;
