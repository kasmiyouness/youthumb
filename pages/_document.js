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
              ▷ YouTube Thumbnail Downloader
              ▷ Save YT Video Thumbnails
          Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos

        What is the use of this YouTube Thumbnail Grabber website?
        People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos.
        That can be used in presentation, animation work or many other activities.

        How to use this YouTube thumbnail downloader website?
        I have shared some of screenshot in which i have guided you how you can use this YouTube downloader website.
        It's quite easy first step is you just copy any YouTube link whom thumbnail you want. youtube cover download Easily you can download you tube cover

       Now paste that url in input box, the moment you paste that link it's automatically going to generate different size of thumbnails for you. 
       Now click on thumbnail download button and it's going to automatically downloaded in your system.
       If you are using Android phone then you have to saved that images and if you are using iphone then i don't know how you can do it?
       Is it legal to download YouTube thumbnails?
       Of course it's 100% legal you can download any YouTube videos thumbnails but as you know thumbnail and video are copyrighted product
        you should take author permissions 1st in order to reuse that.
            </p>
            <p>
           Compatibility of this YT thumbnail grabber website
            This YouTube thumbnail downloader website is going to work well in all devices except iPhone, because iPhone doesn't allow images to be saved in iPhone. But if you using jailbroken iphone then there is no any problem. on the other hand is going to work fine in almost all kinds Android devices and laptop or desktop system.

           Is there any Copyright risk on YouTube Thumbnails?
            Whatever youtube screenshot you are downloading a copyright of respective on owner of that videos. If you want to use it in your work then you should ask for permission.

            Especially if you are reusing on YouTube then it's can create problem but if your plan is outside of YouTube. like use on website for creating logos or any Photoshop types of stuff then there is no any problem. You hardly receive any dmca complaint about related to that particular Youtube thumnail.

          Is reusing YouTube thumbnails are SEO friendly?
            Nope it's not, in short answer it's not seo friendly because almost all thumbnails which are on YouTube are indexed by Google. So which one is unique and which one is duplicate google know it. So it's not SEO friendly as you know. But you can do some stuff on that thumbnail I mean getting some unique effects using photoshop or any other software that can make your thumbnail unique again so that can be reused and make that seo friendly again.

          youtube video thumbnail download
           GatewayMoon.com - Copyright 2023
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
