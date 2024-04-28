import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <meta
            name="keywords"
            content="Toprak Satışı, Bahçe Toprağı, Tarım Toprağı"
          ></meta>
          <meta name="author" content="Celal Yasin Nari"></meta>
          <meta
            name="description"
            content="Aytekin Peyzaj, 2020'den beri üretim, işleme, ve pazarlama alanlarında faaliyet göstermektedir. Katı çiftlik gübresi, süper toprak, fidan dikim harcı ve daha birçok ürünle peyzaj, inşaat ve turizm sektörlerine hizmet veriyoruz. Uzman ekibimiz ve teknolojik alt yapımızla, dünya standartlarını yakalayarak müşterilerimize en kaliteli ürünleri sunuyoruz."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
