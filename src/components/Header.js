import React from "react";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <nav>
      <ul className="nav justify-content-end">
        <li className="nav-item mr-auto">
          <a className="nav-link active my-portfolio" href="./index.html">
            My Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./index.html">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./mywork.html">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./contact.html">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
