import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Removendo a referência ao favicon */}
        <link rel="icon" href="data:," />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
