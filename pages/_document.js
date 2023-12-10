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

          {/* Include the ads.txt line */}
          <meta name="ads.txt" content="google.com, pub-1932386256787608, DIRECT, f08c47fec0942fa0" />
       
        </Head>
        <body>
          <Main />
          
          {/* Additional text for the YouTube Thumbnail Downloader */}
          <div>
            <h1>YouTube Thumbnail Downloader</h1>
            <p>
              ▷ Save YT Video Thumbnails
              Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size.
              It's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos
            </p>
            <p>
              What is the use of this YouTube Thumbnail Grabber website?
              People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos.
              That can be used in presentation, animation work or many other activities.
            </p>
            {/* Add more paragraphs as needed */}
          </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
