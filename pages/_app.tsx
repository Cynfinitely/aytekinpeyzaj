import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Aytekin Peyzaj</title>
      </Head>
      <div className="app">
        <Header />
        <Navbar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
