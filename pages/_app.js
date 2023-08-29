import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import {Analytics} from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
    <Analytics />
    </>
  );
}

export default MyApp;
