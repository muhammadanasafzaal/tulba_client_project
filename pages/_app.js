import "/styles/global.scss";
import Image from "next/image";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Common from "components/Common";
import { Toaster } from "react-hot-toast";
// import 'bootstrap/dist/css/bootstrap.css';
// import { store, persistor } from "../redux/store";
import store from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Head>
          <title>Tulba</title>
          <meta name="description" content="And we created you in pairs" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <Common />
        <Toaster />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
