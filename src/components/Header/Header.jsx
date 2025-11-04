import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <img src="/logo.png" alt="AdInner logo" className="logo" />
      <nav>
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">About</a>
        <a href="/">Industries</a>
        <a href="/">Career</a>
      </nav>
      <a href="/" className="btn-highlight">Reach Us</a>
    </header>
  );
}

export default Header;
