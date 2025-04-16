"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    jQuery?: any;
  }
}
import Header from "@/components/header";
import CardStarted from "@/components/card-started";
import AboutCard from "@/components/about-card";
import ResumeCard from "@/components/resume-card";
import WorksCard from "@/components/works-card";
import BlogCard from "@/components/blog-card";
import ContactsCard from "@/components/contacts-card";
import ContentSidebar from "@/components/content-sidebar";
import Script from "next/script";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Initialize typed.js for typing animation
    if (typeof window !== "undefined") {
      // This will be executed after the component is mounted
      const initScripts = async () => {
        try {
          // Wait for external scripts to load
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Initialize any custom scripts here
          if (window.jQuery && window.jQuery.fn.typed) {
            window.jQuery(".typing-title").typed({
              strings: ["Web Designer", "Developer", "Freelancer"],
              loop: true,
              startDelay: 1000,
              backDelay: 2000,
            });
          }
        } catch (error) {
          console.error("Error initializing scripts:", error);
        }
      };

      initScripts();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page new-skin">
      {/* preloader */}
      {isLoading && (
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* background */}
      <div className="background gradient">
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Container */}
      <div
        className="container opened"
        data-animation-in="fadeInLeft"
        data-animation-out="fadeOutLeft"
      >
        <Header />
        <CardStarted />
        <AboutCard />
        <ResumeCard />
        <WorksCard />
        <BlogCard />
        <ContactsCard />
      </div>

      <div className="s_overlay"></div>
      <ContentSidebar />

      {/* External Scripts */}
      <Script
        src="https://use.fontawesome.com/8da76d029b.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz2w7HUaWudHwd7AWQpCL48Qs050WOn9s"
        strategy="lazyOnload"
      />

      {/* Add jQuery and other scripts */}
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.validate.js" strategy="afterInteractive" />
      <Script src="/js/jquery.magnific-popup.js" strategy="afterInteractive" />
      <Script src="/js/imagesloaded.pkgd.js" strategy="afterInteractive" />
      <Script src="/js/isotope.pkgd.js" strategy="afterInteractive" />
      <Script src="/js/jquery.slimscroll.js" strategy="afterInteractive" />
      <Script src="/js/owl.carousel.js" strategy="afterInteractive" />
      <Script src="/js/typed.js" strategy="afterInteractive" />
      <Script src="/js/scripts.js" strategy="afterInteractive" />
    </div>
  );
}
