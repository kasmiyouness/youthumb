// components/Header.js

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo/Home Link */}
        <Link href="/">
          <a className="text-xl font-bold">Your Logo/Brand</a>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="hover:underline">Privacy Policy</a>
          </Link>
          <Link href="/about-us">
            <a className="hover:underline">About Us</a>
          </Link>
          <Link href="/contact-us">
            <a className="hover:underline">Contact Us</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
