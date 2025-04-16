"use client";
import { useState } from "react";
import type React from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about-card");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    // Hide all sections
    const sections = document.querySelectorAll(".card-inner");
    sections.forEach((section) => {
      section.classList.remove("active");
      section.classList.remove("animated");
    });

    // Show the selected section
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.classList.add("active");
      targetSection.classList.add("animated");
    }

    // Update active state in menu
    setActiveSection(id);

    // Close menu on mobile
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      {/* header profile */}
      <div className="profile">
        <div className="title">Ryan Adlard</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Web Designer</p>
            <p>Developer</p>
            <p>Freelancer</p>
          </div>
        </div>
      </div>

      {/* menu btn */}
      <a
        href="#"
        className="menu-btn"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <span></span>
      </a>

      {/* menu */}
      <div className={`top-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li className={activeSection === "about-card" ? "active" : ""}>
            <a
              href="#about-card"
              onClick={(e) => handleNavClick(e, "about-card")}
            >
              <span className="icon ion-person"></span>
              <span className="link">About</span>
            </a>
          </li>
          <li className={activeSection === "resume-card" ? "active" : ""}>
            <a
              href="#resume-card"
              onClick={(e) => handleNavClick(e, "resume-card")}
            >
              <span className="icon ion-android-list"></span>
              <span className="link">Resume</span>
            </a>
          </li>
          <li className={activeSection === "works-card" ? "active" : ""}>
            <a
              href="#works-card"
              onClick={(e) => handleNavClick(e, "works-card")}
            >
              <span className="icon ion-paintbrush"></span>
              <span className="link">Works</span>
            </a>
          </li>
          <li className={activeSection === "blog-card" ? "active" : ""}>
            <a
              href="#blog-card"
              onClick={(e) => handleNavClick(e, "blog-card")}
            >
              <span className="icon ion-chatbox-working"></span>
              <span className="link">Blog</span>
            </a>
          </li>
          <li className={activeSection === "contacts-card" ? "active" : ""}>
            <a
              href="#contacts-card"
              onClick={(e) => handleNavClick(e, "contacts-card")}
            >
              <span className="icon ion-at"></span>
              <span className="link">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
