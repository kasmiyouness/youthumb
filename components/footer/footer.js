// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="flex justify-center space-x-4">
        {/* Use Link component for navigation */}
        <Link href="/privacy-policy">
          <a className="text-blue-500 hover:underline">Privacy Policy</a>
        </Link>
        <Link href="/about-us">
          <a className="text-blue-500 hover:underline">About Us</a>
        </Link>
        <Link href="/contact-us">
          <a className="text-blue-500 hover:underline">Contact Us</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
