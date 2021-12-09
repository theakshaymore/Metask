import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#e53e3e" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => (
  <div>
    <nav className="container navbar navbar-expand-lg sticky-top bg-light">
      <a className="navbar-brand text-dark nav-brandname" href="#">
        MT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon">
          <i class="bi bi-list"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item pe-2">
            <Link style={currentTab(history, "/")} className="nav-link" to="/">
              Home
            </Link>
          </li>
          {/* Profile */}
          {isAutheticated() && isAutheticated().user.role === 0 && (
            <li className="nav-item pe-2">
              <Link
                style={currentTab(history, "/user/dashboard")}
                className="nav-link"
                to="/user/dashboard"
              >
                Profile
              </Link>
            </li>
          )}
          {/* Signout */}
          {isAutheticated() && (
            <li className="nav-item pe-2">
              <span
                className="nav-link  nav-btn"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
                <i className="bi bi-box-arrow-right ms-2" />
              </span>
            </li>
          )}
          {/* Join/Register */}
          {!isAutheticated() && (
            <Fragment>
              <li className="nav-item pe-2">
                <Link
                  style={currentTab(history, "/signup")}
                  className="nav-link"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item pe-2">
                <Link
                  style={currentTab(history, "/signin")}
                  className="nav-link"
                  to="/signin"
                >
                  Sign In
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  </div>
);

export default withRouter(Menu);
