import { useState } from "react";
import "./header.css";

function Header() {
  /* ============================= BREAK POINTS =========================== */
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          {"Aftab.dev"}
        </a>
        <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="uil uil-briefcase nav-icon"></i> Services
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
