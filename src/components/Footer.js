import React from "react";

function Footer() {
  return (
    <div className="container-sm">
      <div className="d-flex flex-column sticky-footer-wrapper">
        <div className="row">
          <div className="col-2 d-flex">
            <img
              className="footer-image"
              src="./assets/DanProfile.jpg"
              alt="Dan Chiev Profile"
            >
              {" "}
            </img>
            <h6>From Dan Chiev</h6>
          </div>
          <div className="col"></div>
          <div className="col social-media">
            <a
              href="https://www.linkedin.com/in/dan-chiev-16065989/"
              target="blank"
            >
              <img src="./assets/LinkedInIcon.png" alt="LinkedIn">
                {" "}
              </img>
            </a>
            <a
              href="https://www.instagram.com/neighborhoodwolf/"
              target="blank"
            >
              <img src="./assets/InstagramIcon.png" alt="Instagram">
                {" "}
              </img>
            </a>
            <a href="mailto:danchiev2@gmail.com" target="blank">
              <img
                className="email-icon"
                src="./assets/EmailIcon.png"
                alt="Email"
              >
                {" "}
              </img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
