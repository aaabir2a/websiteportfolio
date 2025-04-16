"use client"
import { useState } from "react"

export default function WorksCard() {
  const [filter, setFilter] = useState("grid-item")

  const handleFilterChange = (value: string) => {
    setFilter(value)
  }

  return (
    <div className="card-inner" id="works-card">
      <div className="card-wrap">
        {/* Works */}
        <div className="content works">
          {/* title */}
          <div className="title">Recent Works</div>

          {/* filters */}
          <div className="filter-menu filter-button-group">
            <div className={`f_btn ${filter === "grid-item" ? "active" : ""}`}>
              <label>
                <input
                  type="radio"
                  name="fl_radio"
                  value="grid-item"
                  checked={filter === "grid-item"}
                  onChange={() => handleFilterChange("grid-item")}
                />
                All
              </label>
            </div>
            <div className={`f_btn ${filter === "photo" ? "active" : ""}`}>
              <label>
                <input
                  type="radio"
                  name="fl_radio"
                  value="photo"
                  checked={filter === "photo"}
                  onChange={() => handleFilterChange("photo")}
                />
                Image
              </label>
            </div>
            <div className={`f_btn ${filter === "gallery" ? "active" : ""}`}>
              <label>
                <input
                  type="radio"
                  name="fl_radio"
                  value="gallery"
                  checked={filter === "gallery"}
                  onChange={() => handleFilterChange("gallery")}
                />
                Gallery
              </label>
            </div>
            <div className={`f_btn ${filter === "video" ? "active" : ""}`}>
              <label>
                <input
                  type="radio"
                  name="fl_radio"
                  value="video"
                  checked={filter === "video"}
                  onChange={() => handleFilterChange("video")}
                />
                Video
              </label>
            </div>
            <div className={`f_btn ${filter === "music" ? "active" : ""}`}>
              <label>
                <input
                  type="radio"
                  name="fl_radio"
                  value="music"
                  checked={filter === "music"}
                  onChange={() => handleFilterChange("music")}
                />
                Music
              </label>
            </div>
            <div className={`f_btn ${filter === "design" ? "active" : ""}`}>
              <label>
                <input
                  type="radio"
                  name="fl_radio"
                  value="design"
                  checked={filter === "design"}
                  onChange={() => handleFilterChange("design")}
                />
                Content
              </label>
            </div>
          </div>

          {/* content */}
          <div className="row grid-items border-line-v">
            {/* work item photo */}
            <div
              className={`col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h ${filter !== "grid-item" && filter !== "photo" ? "hide" : ""}`}
            >
              <div className="box-item">
                <div className="image">
                  <a href="/images/works/work1.jpg" className="has-popup-image">
                    <img src="/images/works/work1.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-image"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="/images/works/work1.jpg" className="name has-popup-image">
                    Motorcycle Helmet
                  </a>
                  <div className="category">Image</div>
                </div>
              </div>
            </div>

            {/* work item video */}
            <div
              className={`col col-d-6 col-t-6 col-m-12 grid-item video border-line-h ${filter !== "grid-item" && filter !== "video" ? "hide" : ""}`}
            >
              <div className="box-item">
                <div className="image">
                  <a href="https://vimeo.com/97102654" className="has-popup-video">
                    <img src="/images/works/work2.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-videocamera"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="https://vimeo.com/97102654" className="name has-popup-video">
                    Minimalism Shapes
                  </a>
                  <div className="category">Video</div>
                </div>
              </div>
            </div>

            {/* work item music */}
            <div
              className={`col col-d-6 col-t-6 col-m-12 grid-item music border-line-h ${filter !== "grid-item" && filter !== "music" ? "hide" : ""}`}
            >
              <div className="box-item">
                <div className="image">
                  <a
                    href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                    className="has-popup-music"
                  >
                    <img src="/images/works/work3.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-music-note"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="#" className="name has-popup">
                    Staircase
                  </a>
                  <div className="category">Music</div>
                </div>
              </div>
            </div>

            {/* work item design */}
            <div
              className={`col col-d-6 col-t-6 col-m-12 grid-item design border-line-h ${filter !== "grid-item" && filter !== "design" ? "hide" : ""}`}
            >
              <div className="box-item">
                <div className="image">
                  <a href="#popup-1" className="has-popup-media">
                    <img src="/images/works/work4.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-images"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="#popup-1" className="name has-popup-media">
                    Mobile Application
                  </a>
                  <div className="category">Content</div>
                </div>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="/images/works/work4.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Mobile Application</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            So striking at of to welcomed resolved. Northward by described up household therefore
                            attention. Excellence decisively nay man yet impression for contrasted remarkably.
                          </p>
                          <p>
                            Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry
                            sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few
                            her two cordially admitting old.
                          </p>
                          <blockquote>
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Pellentesque suscipit.
                          </blockquote>
                          <p>
                            Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh
                            removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on.
                            Increasing sufficient everything men him admiration unpleasing sex.
                          </p>
                          <ul className="list-style">
                            <li>Greatest properly off ham exercise all.</li>
                            <li>Unsatiable invitation its possession nor off.</li>
                            <li>All difficulty estimating unreserved increasing the solicitude.</li>
                          </ul>
                          <p>
                            Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up
                            civil do an offer wound of.
                          </p>
                        </div>
                        <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* work item photo */}
            <div
              className={`col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h ${filter !== "grid-item" && filter !== "gallery" ? "hide" : ""}`}
            >
              <div className="box-item">
                <div className="image">
                  <a href="#gallery-1" className="has-popup-gallery">
                    <img src="/images/works/work5.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-images"></span>
                    </span>
                  </a>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="/images/works/work6.jpg"></a>
                    <a href="/images/works/work1.jpg"></a>
                    <a href="/images/works/work5.jpg"></a>
                  </div>
                </div>
                <div className="desc">
                  <a href="/images/works/work5.jpg" className="name has-popup-image">
                    Gereal Travels
                  </a>
                  <div className="category">Gallery</div>
                </div>
              </div>
            </div>

            {/* Additional work items would go here */}

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
