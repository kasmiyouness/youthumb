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

          <script data-ad-client="ca-pub-1932386256787608" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          
        </Head>
        <body>
          <Main />
          
    <div class="centered-text">
        <h1>YouTube Thumbnail Downloader</h1>
        <p>Introducing our YouTube Thumbnail Downloader – a powerful tool designed for content creators seeking an edge in visual appeal.
           Elevate your videos with captivating thumbnails that entice viewers at first glance.
            Our user-friendly downloader simplifies the process: just paste the video URL, and voila! Customize and download your chosen thumbnail effortlessly.
             Boost your video's click-through rate and enhance its discoverability on YouTube. Dive into the world of effective video marketing with our Thumbnail Downloader – where simplicity meets impactful visuals.
              Try it now and take your YouTube content to new heights.</p>
    </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
