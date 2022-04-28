import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  function signOut() {
    window.confirm("Are your sure you want to Signout?");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="#" className="brand-link">
          <img
            src={process.env.PUBLIC_URL + "/assets/dist/img/AdminLTELogo.png"}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/assets/dist/img/profile.png"}
                className="img-circle elevation-2"
                alt=""
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                {user.name}
              </Link>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/invoice/list" className="nav-link">
                  <i className="nav-icon fas fa-file-alt" />
                  <p>Invoice</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customers/list" className="nav-link">
                  <i className="nav-icon fas fa-shopping-basket" />
                  <p>Customers</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users/list" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>Users</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/report" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>Report</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={signOut}>
                  <i className="nav-icon fas fa-sign-out-alt" />
                  <p>Sign out</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <aside class="control-sidebar control-sidebar-light"></aside>
    </div>
  );
}
