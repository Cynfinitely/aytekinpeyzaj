import "../styles/globals.scss";
import type {AppProps} from 'next/app'
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({Component, pageProps}: AppProps) {
    return <div className="app">
        <Header/>
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer/>
    </div>
}

export default MyApp
