// Footer.tsx

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p className="mb-2">1234 Street Name</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-blue-700 transition" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-blue-500 transition" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-600 transition" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-blue-800 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
