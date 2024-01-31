import "../styles/globals.css";
import MainContainer from "../components/MainContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </>
    );
}
