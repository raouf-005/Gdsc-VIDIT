import React from "react";
import "./../styles/Header.css";
import logo from "./../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo" />
        <div className="header-right">
            <button className="headerbtns">Home</button>
            <button className="headerbtns">About</button>
            <button className="headerbtns">workshop</button>
            <button className="headerbtns">Contact</button>
            <button className="RegisterBtn">Register Now</button>
        </div>
        
    </div>
  );
}