import React from "react";
import GrayLine from "../UI/GrayLine";
import './style.scss';

const Footer = () => {
  const socialIcons = [
    '../../img/facebook.svg',
    '../../img/tweeter.svg',
    '../../img/youtube.svg',
    '../../img/instagram.svg',
  ]

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
            {socialIcons.map((icon, index) => {
              return (
                <a
                  href="#"
                  key={index}
                >
                  <img src={icon} alt="logo" />
                </a>
              )
            })}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
