
import React from "react";
// import Resume from "../assets/Resume.pdf";

function Navbar({ currentPage, changePage }) {
  return (
    <header>
      <h1 id="myName">Norman Herrera</h1>
      <div className="header-right">
        <a
          className={
            currentPage === "About"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#About"
          onClick={function () {
            changePage("About");
          }}
        >
          About Me
        </a>
        <a
          className={
            currentPage === "Projects"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#Projects"
          onClick={function () {
            changePage("Projects");
          }}
        >
          Portfolio
        </a>
        <a
          className={
            currentPage === "Contact"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#Contact"
          onClick={function () {
            changePage("Contact");
          }}
        >
          Contact
        {/* </a>
        <a href={Resume} target="_blank" rel="noreferrer noopener">
          Resume
        </a> */}
      </div>
    </header>
  );
}

export default Navbar;