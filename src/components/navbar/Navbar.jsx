import React from "react";

import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

import ProfileImage from "../../assets/images/avatars/profile.jpg";

const Navbar = ({ toggle, click }) => {
  return (
    <nav className="navbar navbar--expand-lg" id="navbar">
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <div className="d-flex align-items-center">
            <h5 className="font-weight-bolder mb-0">Overview</h5>

            <div
              className={`sidebar__toggler${toggle ? " show" : ""}`}
              aria-expanded="false"
              onClick={() => click(!toggle)}
            >
              <i className="sidebar__toggler-bar"></i>
              <i className="sidebar__toggler-bar"></i>
              <i className="sidebar__toggler-bar"></i>
            </div>
          </div>

          <ol className="breadcrumb mb-0 pb-0 pt-1 px-0">
            <li className="breadcrumb__item">
              <Link to="/" className="breadcrumb__link">
                Home
              </Link>
            </li>

            <li className="breadcrumb__item">
              <Link to="/" className="breadcrumb__link">
                Pages
              </Link>
            </li>

            <li className="breadcrumb__item active">Overview</li>
          </ol>
        </nav>

        <div className="collapse navbar__collapse" id="navbarCollapse">
          <ul className="nav navbar__nav ms-auto">
            <li className="nav__item">
              <a
                href="https://deshpro.netlify.app"
                className="nav__link nav__link--extended"
              >
                <span className="nav__icon-container">
                  <FeatherIcon icon="search" className="fe nav__icon" />
                </span>

                <span className="nav__text nav__text--trailing">Search</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://deshpro.netlify.app"
                className="nav__link nav__link--extended"
              >
                <span className="nav__icon-container">
                  <FeatherIcon icon="bell" className="fe nav__icon" />
                </span>

                <span className="nav__text nav__text--trailing">
                  Notifications
                </span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://deshpro.netlify.app"
                className="nav__link nav__link--extended dropdown__toggle"
              >
                <span className="nav__icon-container">
                  <FeatherIcon icon="mail" className="fe nav__icon" />
                </span>

                <span className="nav__text nav__text--trailing me-auto">
                  Messages
                </span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://deshpro.netlify.app"
                className="avatar nav__link nav__link--extended"
              >
                <img
                  src={ProfileImage}
                  className="avatar__img avatar__img--sm"
                  alt="avatar"
                />

                <span id="avatar__content" className="avatar__content">
                  <h6 className="avatar__content-name">Mahim Farhad</h6>
                  <small className="avatar__content-stats text-muted">
                    Sr. Developer
                  </small>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
