"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Collapse menu when a link is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-secondary shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/furtu.png"
              className="rounded-lg"
              alt="logo"
              width={60}
              height={50}
            />
          </Link>
          <h1 className="text-2xl font-bold text-gray-100">
            FURTU CONSTRUCTION
          </h1>
        </div>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center px-3 py-2 text-white rounded focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-8 space-y-6 lg:space-y-0 flex-col lg:flex-row items-center lg:static absolute bg-primary lg:bg-transparent lg:top-auto top-16 left-0 w-full lg:w-auto transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href} className="group">
              <Link
                href={href}
                onClick={handleLinkClick}
                className="text-gray-100 text-lg font-medium py-2 px-4 hover:text-orange-400 transition-all duration-300"
              >
                {label}
                <span className="block h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
