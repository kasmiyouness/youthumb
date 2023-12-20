import { useState } from "react";
import copy from "copy-to-clipboard";
import Link from "next/link";
import Footer from "../components/footer/footer";
import Header from "../components/Navbar/Navbar";


const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidYouTubeURL = (url) => {
    // Regular expression for YouTube video URL validation
    const regExp = /^(https?\:\/\/)?(www\.youtube\.com|youtube\.com|youtu\.be)\/.+$/;
    return regExp.test(url);
  };

  const getYouTubeThumbnail = async (url) => {
    setError("");
    setLoading(true);

    try {
      if (!isValidYouTubeURL(url)) {
        throw new Error("Invalid YouTube URL. Please enter a valid URL.");
      }

      let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
      let match = url.match(regExp);

      if (!match || match[1].length !== 11) {
        throw new Error("Invalid YouTube URL. Please enter a valid URL.");
      }

      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (url) => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = "thumbnail.jpg";
    
    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality thumbnails from YouTube videos.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
          disabled={loading}
        >
          {loading ? "Fetching Thumbnails..." : "Download Thumbnails"}
        </button>
        {error && (
          <p className="text-red-500 mt-2" style={{ color: 'red' }}>
            {error}
          </p>
        )}
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <div className="flex mt-2">
                  <button
                    className="btn-blue mr-2"
                    onClick={() => copy(option.url)}
                  >
                    Copy Image URL
                  </button>
                  <button
                    className="btn-green"
                    onClick={() => handleDownload(option.url)}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
