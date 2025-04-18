"use client";

export default function BlogCard() {
  // Function to toggle sidebar
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".content-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
  };

  return (
    <div className="card-inner blog" id="blog-card">
      <div className="card-wrap">
        {/* Blog */}
        <div className="content blog">
          {/* title */}
          <div className="title">
            <span>Blog</span>
            <a
              href="#"
              className="blog-sidebar-btn"
              onClick={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>

          {/* content */}
          <div className="row border-line-v">
            {/* blog item */}
            <div className="col col-d-6 col-t-6 col-m-12">
              <div className="box-item">
                <div className="image">
                  <a href="/blog-post-new.html">
                    <img
                      src="/images/blog/blog1.jpg"
                      alt="By spite about do of allow"
                    />
                    <span className="info">
                      <span className="ion ion-document-text"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="/blog-post-new.html">
                    <span className="date">April 28, 2020</span>
                  </a>
                  <a href="/blog-post-new.html" className="name">
                    By spite about do of allow
                  </a>
                  <div className="text">
                    <p>
                      Ex audire suavitate has, ei quodsi tacimates sapientem
                      sed, pri zril ubique ut. Te cule tation munere noluisse.
                      Enim torquatos&#8230;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* blog item */}
            <div className="col col-d-6 col-t-6 col-m-12">
              <div className="box-item">
                <div className="image">
                  <a href="/blog-post-new.html">
                    <img
                      src="/images/blog/blog2.jpg"
                      alt="By spite about do of allow"
                    />
                    <span className="info">
                      <span className="ion ion-document-text"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="/blog-post-new.html">
                    <span className="date">April 28, 2020</span>
                  </a>
                  <a href="/blog-post-new.html" className="name">
                    By spite about do of allow
                  </a>
                  <div className="text">
                    <p>
                      Ex audire suavitate has, ei quodsi tacimates sapientem
                      sed, pri zril ubique ut. Te cule tation munere noluisse.
                      Enim torquatos&#8230;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* blog item */}
            <div className="col col-d-6 col-t-6 col-m-12">
              <div className="box-item">
                <div className="image">
                  <a href="/blog-post-new.html">
                    <img
                      src="/images/blog/blog3.jpg"
                      alt="By spite about do of allow"
                    />
                    <span className="info">
                      <span className="ion ion-document-text"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="/blog-post-new.html">
                    <span className="date">April 28, 2020</span>
                  </a>
                  <a href="/blog-post-new.html" className="name">
                    By spite about do of allow
                  </a>
                  <div className="text">
                    <p>
                      Ex audire suavitate has, ei quodsi tacimates sapientem
                      sed, pri zril ubique ut. Te cule tation munere noluisse.
                      Enim torquatos&#8230;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* blog item */}
            <div className="col col-d-6 col-t-6 col-m-12">
              <div className="box-item">
                <div className="image">
                  <a href="/blog-post-new.html">
                    <img
                      src="/images/blog/blog1.jpg"
                      alt="By spite about do of allow"
                    />
                    <span className="info">
                      <span className="ion ion-document-text"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="/blog-post-new.html">
                    <span className="date">April 28, 2020</span>
                  </a>
                  <a href="/blog-post-new.html" className="name">
                    By spite about do of allow
                  </a>
                  <div className="text">
                    <p>
                      Ex audire suavitate has, ei quodsi tacimates sapientem
                      sed, pri zril ubique ut. Te cule tation munere noluisse.
                      Enim torquatos&#8230;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>

          <div className="pager">
            <nav className="navigation pagination">
              <div className="nav-links">
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="#">
                  2
                </a>
                <a className="next page-numbers" href="#">
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
