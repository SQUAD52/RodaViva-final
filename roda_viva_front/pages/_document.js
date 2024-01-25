import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="icon" href="/img/logoRodaViva.png" />
            </Head>
            <body className="container-wrapper">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
