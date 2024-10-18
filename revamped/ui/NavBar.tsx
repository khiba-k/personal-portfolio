"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2a2b38]/50 border-2 border-[#2a2b37] rounded-lg px-4 py-3 m-5 shadow-lg max-w-4xl mx-auto backdrop-blur-sm">
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between">
        <p className="text-sky-400 font-semibold text-lg">Khiba &gt;&gt;</p>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-sky-400 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a
              href="#intro"
              className="text-white hover:text-sky-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-sky-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khibakoenane@gmail.com&su=Connect:%20&body=Hey%20Khiba."
              target="_blank"
              className="text-white hover:text-sky-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Connect
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <a
              href="#intro"
              className="block text-white hover:text-sky-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-white hover:text-sky-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khibakoenane@gmail.com&su=Connect:%20&body=Hey%20Khiba."
              target="_blank"
              className="block text-white hover:text-sky-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
