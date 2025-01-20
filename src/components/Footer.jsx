import React from "react";
import { MoveUp, Facebook, Instagram } from 'lucide-react';
import { FaGoogle, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm font-semibold ">
              Design outstanding interfaces
            </p>
            <p className="text-sm mb-4">
              with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex gap-3">
              {/* Social Media Icons */}
              <a
                href="#"
                className="p-1 rounded-full bg-white hover:bg-gray-200 text-blue-800"
              >
                <Facebook />

              </a>
              <a
                href="#"
                className="p-1 rounded-full bg-white hover:bg-gray-200 text-blue-800"
              >
                <FaGoogle />

              </a>
              <a
                href="#"
                className="p-1 rounded-full bg-white hover:bg-gray-200 text-blue-800"
              >
                <FaApple />
              </a>
              <a
                href="#"
                className="p-1 rounded-full bg-white hover:bg-gray-200 text-blue-800"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-orange-400 mb-4">START A BUSINESS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Enterprise Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-orange-400 mb-4">GOVERNMENT REGISTRATION</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Manisha Mishra
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-orange-400 mb-4">COMPLIANCE & TAX</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Channels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Scale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Watch the Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Competition
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-orange-400 mb-4">BIS & CDSCO</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center  mt-10">
          <div className="p-2 rounded-full h-10 w-10 bg-orange-400 hover:bg-orange-500 text-white flex items-center justify-center">
            <a href="#" title="Back to top">
              <MoveUp />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;





