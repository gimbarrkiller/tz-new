import React from "react";
import GrayLine from "../UI/GrayLine";
import './style.scss';

const Footer = () => {
  return (
    <>
      <GrayLine />
      <footer className="footer-full">
        <div className="footer">
          <div>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms & Conditions</a></p>
            <p><a href="#">Cookie Policy</a>-</p>
          </div>
          <div className="footer-center">
            <img src="../../img/logo.svg" alt="logo" />
            <p>©2022 All rights reserved. Powered by Atla</p>
          </div>
          <div className="footer-right">
            <a href="#"><img src="../../img/facebook.svg" alt="logo" /></a>
            <a href="#"><img src="../../img/tweeter.svg" alt="logo" /></a>
            <a href="#"><img src="../../img/youtube.svg" alt="logo" /></a>
            <a href="#"><img src="../../img/instagram.svg" alt="logo" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
