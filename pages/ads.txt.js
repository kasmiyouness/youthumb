// pages/ads.txt.js
const AdsTxt = () => null;

AdsTxt.getInitialProps = ({ res }) => {
  // Your actual ads.txt content
  const adsTxtContent = `
  google.com, pub-1932386256787608, DIRECT, f08c47fec0942fa0
    // Add more lines as needed
  `;

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(adsTxtContent);

  // Return an empty object to prevent Next.js from trying to render a React component
  return { props: {} };
};

export default AdsTxt;
