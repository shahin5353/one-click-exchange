import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand font-weight-bolder" to="/">
          One Click Exchange
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-uppercase font-weight-bold">
            <li className="nav-item">
              <NavLink
                className="nav-link px-4"
                exact
                to="/"
                activeClassName="main-nav-active"
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-4"
                exact
                to="/services"
                activeClassName="main-nav-active"
              >
                services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-4"
                exact
                to="/about"
                activeClassName="main-nav-active"
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-4"
                exact
                to="/review"
                activeClassName="main-nav-active"
              >
                review
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-4"
                exact
                to="/contact"
                activeClassName="main-nav-active"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="py-2 text-center exchange-time text-white">
      <h5><strong>Exchange Time :</strong> Everyday <strong>10AM-10PM</strong></h5>
    </div>
    </>
  );
};

export default Header;
