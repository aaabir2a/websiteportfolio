"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  User,
  List,
  Paintbrush,
  MessageSquare,
  AtSign,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="profile">
          <div className="text-xl font-bold">Ryan Adlard</div>
          <div className="text-sm text-gray-600">
            <span className="typing-title">Web Designer</span>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="menu-btn md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`top-menu ${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link
                href="#about-card"
                className="flex items-center space-x-2 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <User size={16} />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                href="#resume-card"
                className="flex items-center space-x-2 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <List size={16} />
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link
                href="#works-card"
                className="flex items-center space-x-2 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <Paintbrush size={16} />
                <span>Works</span>
              </Link>
            </li>
            <li>
              <Link
                href="#blog-card"
                className="flex items-center space-x-2 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <MessageSquare size={16} />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                href="#contacts-card"
                className="flex items-center space-x-2 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <AtSign size={16} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
