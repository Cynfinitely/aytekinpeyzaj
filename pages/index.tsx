import Contact from "../components/Contact";
import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import InfoBanner from "../components/InfoBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aytekin Peyzaj</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <main className="main">
        <Jumbotron />
        <InfoBanner />
        <Contact />
      </main>
    </>
  );
}
