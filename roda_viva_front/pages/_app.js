import "../styles/globals.css";
import MainContainer from "../components/MainContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/fbadad80a0.js" crossOrigin="anonymous"></script>
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  );
}
