import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
