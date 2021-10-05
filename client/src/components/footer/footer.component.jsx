import React from "react";
import Logo from "../logo/logo.component";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="section section-footer">
      <Logo variant="footer-logo" />
      <p className="copyright-message">
        © created by{" "}
        <a href="https://github.com/faiyaz032" className="team-name">
          Hopeless group
        </a>
        - devChallenges.io 2021
      </p>
    </footer>
  );
};

export default Footer;
