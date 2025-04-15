"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Profile from "@/components/profile";
import About from "@/components/about";
import Resume from "@/components/resume";
import Works from "@/components/works";
import Blog from "@/components/blog";
import Contact from "@/components/contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home-card");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    // Add event listener
    window.addEventListener("hashchange", handleHashChange);

    // Scroll to section when hash changes
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", scrollToSection);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("hashchange", scrollToSection);
    };
  }, []);

  return (
    <main className="page">
      {/* Preloader */}
      {isLoading && (
        <div className="preloader fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="spinner">
            <div className="double-bounce1 w-16 h-16 rounded-full bg-primary absolute top-0 left-0 opacity-60 animate-ping"></div>
            <div className="double-bounce2 w-16 h-16 rounded-full bg-secondary absolute top-0 left-0 opacity-60 animate-ping delay-300"></div>
          </div>
        </div>
      )}

      {/* Background */}
      <div className="background gradient bg-gradient-primary fixed inset-0 -z-10">
        <ul className="bg-bubbles">
          {[...Array(10)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      {/* Container */}
      <div className="container relative min-h-screen">
        <Header />

        {/* Content */}
        <div className="content-wrapper pt-20">
          {activeSection === "home-card" && <Profile />}
          {activeSection === "about-card" && <About />}
          {activeSection === "resume-card" && <Resume />}
          {activeSection === "works-card" && <Works />}
          {activeSection === "blog-card" && <Blog />}
          {activeSection === "contacts-card" && <Contact />}
        </div>
      </div>
    </main>
  );
}
