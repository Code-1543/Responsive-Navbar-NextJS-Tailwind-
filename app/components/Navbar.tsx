"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-yellow-300 font-bold text-2xl">
                    <Link href="/">Company Name</Link>
                </div>

                {/* Hamburger Icon (only visible on small screens) */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8 text-yellow-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Items (shown on large screens) */}
                <div className="hidden lg:flex lg:space-x-6 text-yellow-300">
                    <Link href="#home">
                        <div className="text-yellow-300 hover:text-yellow-400 text-lg transition duration-300 ease-in-out">Home</div>
                    </Link>
                    <Link href="#news">
                        <div className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out">News</div>
                    </Link>
                    <Link href="#about">
                        <div className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out">About Us</div>
                    </Link>
                    <Link href="#services">
                        <div className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out">Services</div>
                    </Link>
                    <Link href="#contact">
                        <div className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out">Contact Us</div>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (only shown when open) */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} `}>
                <div className="flex flex-col items-center space-y-4 py-4 bg-blue-700 text-yellow-300">
                    <Link href="#home">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out"
                        >
                            Home
                        </div>
                    </Link>
                    <Link href="#news">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out"
                        >
                            News
                        </div>
                    </Link>
                    <Link href="#about">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out"
                        >
                            About Us
                        </div>
                    </Link>
                    <Link href="#services">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out"
                        >
                            Services
                        </div>
                    </Link>
                    <Link href="#contact">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="hover:text-yellow-400 text-lg transition duration-300 ease-in-out"
                        >
                            Contact Us
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
