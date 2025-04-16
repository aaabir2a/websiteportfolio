export default function CardStarted() {
  return (
    <div className="card-started" id="home-card">
      {/* Profile */}
      <div className="profile no-photo">
        {/* profile image */}
        <div
          className="slide"
          style={{ backgroundImage: "url(/images/man5_big.jpg)" }}
        ></div>

        {/* profile titles */}
        <div className="title">Ryan Adlard</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Web Designer</p>
            <p>Developer</p>
            <p>Freelancer</p>
          </div>
        </div>

        {/* profile socials */}
        <div className="social">
          <a target="_blank" href="https://dribbble.com/" rel="noreferrer">
            <span className="fa fa-dribbble"></span>
          </a>
          <a target="_blank" href="https://twitter.com/" rel="noreferrer">
            <span className="fa fa-twitter"></span>
          </a>
          <a target="_blank" href="https://github.com/" rel="noreferrer">
            <span className="fa fa-github"></span>
          </a>
          <a target="_blank" href="https://www.spotify.com/" rel="noreferrer">
            <span className="fa fa-spotify"></span>
          </a>
          <a target="_blank" href="https://stackoverflow.com/" rel="noreferrer">
            <span className="fa fa-stack-overflow"></span>
          </a>
        </div>

        {/* profile buttons */}
        <div className="lnks">
          <a href="#" className="lnk">
            <span className="text">Download CV</span>
          </a>
          <a href="#" className="lnk discover">
            <span className="text">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}
