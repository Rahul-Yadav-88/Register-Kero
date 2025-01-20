import React from 'react'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { FaPinterest } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';

const Nav = () => {
    return (
        <div>
            <div>
                <div className="hidden bg-[#1C4670] text-white lg:flex justify-end px-16 py-2 space-x-6 text-sm">
                    <a href="mailto:www.registerkaro.in" className="flex items-center space-x-2">
                        <Mail />
                        <span>www.registerkaro.in</span>
                    </a>
                    <a href="tel:+918447746183" className="flex items-center space-x-2">
                        <Phone />

                        <span>+91 8447746183</span>
                    </a>
                    <a className="flex items-center space-x-2">
                        <Instagram />
                        <Facebook />
                        <Twitter />
                        <FaPinterest />

                    </a>

                </div>

            </div>
            <header className="">
                <div className="container mx-auto flex items-center justify-between py-3 px-6">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="/Nlogo.png"
                            alt="RegisterKaro Logo"
                            className="h-10"
                        />

                    </div>


                    {/* Navigation Links */}
                    <nav className="hidden lg:flex items-center px-14 space-x-6 text-sm">
                        <a href="#" className="hover:text-gray-700 font-semibold">Home</a>
                        <div className="relative group">
                            <a href="#" className="hover:text-gray-700 font-semibold flex items-center space-x-1">
                                <span>Our Services</span>
                                <ChevronDown />

                            </a>
                            {/* Dropdown */}
                            <div className="absolute left-0 hidden  group-hover:block bg-white text-blue-900 py-2 shadow-md rounded-md">
                                <a href="#" className="block px-4 font-semibold py-2 hover:bg-gray-600">Service 1</a>
                                <a href="#" className="block px-4 font-semibold py-2 hover:bg-gray-600">Service 2</a>
                                <a href="#" className="block px-4 font-semibold py-2 hover:bg-gray-600">Service 3</a>
                            </div>
                        </div>
                        <a href="#" className="hover:text-gray-700 font-semibold">Blog</a>
                        <a href="#" className="hover:text-gray-700 font-semibold">Contact Us</a>
                        <a href="#" className="hover:text-gray-700 font-semibold">About Us</a>
                        <a href="#" className="hover:text-gray-700 font-semibold">
                            <Search />

                        </a>

                        <button className="bg-[#ffa229] text-sm px-5 py-2 rounded-lg hover:bg-orange-600">
                        Talk An Expert
                    </button>
                    </nav>

                    {/* Call to Action */}
                    
                </div>
            </header>    </div>
    )
}

export default Nav