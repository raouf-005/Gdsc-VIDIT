import React from "react";
import "./../styles/Header.css";
import logo from "./../assets/logo.svg";
import cornerRectangle from "./../backgroundassets/cornerRectangle.svg";

export const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};


export default function Header() {
  return (
    <div className="header" id="home-section">
        <img src={logo} alt="logo" />
        <div className="header-right">
            <button className="headerbtns">
              Home
              </button>
            <button className="headerbtns"
             onClick={handleClick("about")}
             >
              About
            </button>
            <button className="headerbtns"
              onClick={handleClick("workshop")}
            >
              workshop
              </button>
            <button className="headerbtns"
              onClick={handleClick("contact")}
              >
              Contact
              </button>
            <button className="RegisterBtn"
              onClick={() => window.open('https://forms.gle/', '_blank')}
            >
              Register Now</button>
        </div>
       <img src={cornerRectangle} alt="corner" className="cornerRectangle"/>
    </div>
  );
}