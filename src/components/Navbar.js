import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  function signOut() {
    window.confirm("Are your sure you want to Signout?");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              data-toggle="dropdown"
              href="#"
              onClick={signOut}
            >
              <i class="fas fa-sign-out-alt"></i> Sing Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
