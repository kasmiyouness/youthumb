// components/footer/Footer.js

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        {/* Your existing footer content */}

        <div className="flex justify-center mt-4">
          {/* Use Link without anchor tag inside it */}
          <Link href="/privacy-policy">
            <div className="mx-2 cursor-pointer hover:text-gray-300">Privacy Policy</div>
          </Link>
          <Link href="/about-us">
            <div className="mx-2 cursor-pointer hover:text-gray-300">About Us</div>
          </Link>
          <Link href="/contact-us">
            <div className="mx-2 cursor-pointer hover:text-gray-300">Contact Us</div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
