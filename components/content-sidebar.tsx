"use client";
import { useState, useEffect } from "react";

export default function ContentSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Add event listeners for sidebar triggers
  useEffect(() => {
    // Find all elements that should trigger the sidebar
    const sidebarTriggers = document.querySelectorAll(
      ".sidebar-btn, .blog-sidebar-btn"
    );

    const handleTriggerClick = (e: Event) => {
      e.preventDefault();
      toggleSidebar();
    };

    // Add click event to all triggers
    sidebarTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handleTriggerClick);
    });

    return () => {
      // Clean up event listeners
      sidebarTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleTriggerClick);
      });
    };
  }, []);

  return (
    <div className={`content-sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-wrap search-form">
        <aside id="secondary" className="widget-area">
          <section id="search-2" className="widget widget_search">
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search …"
                value=""
                name="s"
              />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </section>
          <section className="widget widget_recent_entries">
            <h2 className="widget-title">
              <span className="widget-title-span">
                <span className="first-word">Recent</span> Posts
              </span>
            </h2>
            <ul>
              <li>
                <a href="#">Creativity Is More Than</a>
              </li>
              <li>
                <a href="#">Designing the perfect</a>
              </li>
              <li>
                <a href="#">Music Player Design</a>
              </li>
              <li>
                <a href="#">A Song And Dance Act</a>
              </li>
              <li>
                <a href="#">By spite about do of allow</a>
              </li>
            </ul>
          </section>
          <section className="widget widget_recent_comments">
            <h2 className="widget-title">
              <span className="widget-title-span">
                <span className="first-word">Recent</span> Comments
              </span>
            </h2>
            <ul>
              <li className="recentcomments">
                <span className="comment-author-link">JOHN SMITH</span> on{" "}
                <a href="#">Creativity Is More Than</a>
              </li>
              <li className="recentcomments">
                <span className="comment-author-link">ADAM SMITH</span> on{" "}
                <a href="#">Creativity Is More Than</a>
              </li>
              <li className="recentcomments">
                <span className="comment-author-link">admin</span> on{" "}
                <a href="#">Designing the perfect</a>
              </li>
              <li className="recentcomments">
                <span className="comment-author-link">admin</span> on{" "}
                <a href="#">Designing the perfect</a>
              </li>
              <li className="recentcomments">
                <span className="comment-author-link">James</span> on{" "}
                <a href="#">Designing the perfect</a>
              </li>
            </ul>
          </section>
          <section className="widget widget_archive">
            <h2 className="widget-title">
              <span className="widget-title-span">
                <span className="first-letter">Archives</span>
              </span>
            </h2>
            <ul>
              <li>
                <a href="#">November 2018</a>
              </li>
            </ul>
          </section>
          <section className="widget widget_categories">
            <h2 className="widget-title">
              <span className="widget-title-span">
                <span className="first-letter">Categories</span>
              </span>
            </h2>
            <ul>
              <li className="cat-item cat-item-2">
                <a href="#">Design</a>
              </li>
              <li className="cat-item cat-item-3">
                <a href="#">Music</a>
              </li>
            </ul>
          </section>
          <section className="widget widget_meta">
            <h2 className="widget-title">
              <span className="widget-title-span">
                <span className="first-letter">Meta</span>
              </span>
            </h2>
            <ul>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Entries feed</a>
              </li>
              <li>
                <a href="#">Comments feed</a>
              </li>
              <li>
                <a href="#">WordPress.org</a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
      <span className="close" onClick={toggleSidebar}></span>
    </div>
  );
}
