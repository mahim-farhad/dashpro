import React from "react";

import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

import BrandLogo from "../../assets/images/brand_logos/brand-logo.png";

const Sidebar = ({ toggle }) => {
  return (
    <aside className={`sidebar sidebar--floating${toggle ? " show" : ""}`}>
      <div className="sidebar__header">
        <Link to="/" className="sidebar__brand">
          <img src={BrandLogo} className="sidebar__brand-logo" alt="avatar" />

          <span className="sidebar__brand-text mb-0">Dashpro</span>
        </Link>
      </div>

      <div className="sidebar__body">
        <ul className="nav nav--vertical">
          <li className="nav__item">
            <h6 className="nav__title">Menu</h6>
          </li>

          <li className="nav__item">
            <Link to="/" className="nav__link nav__link--extended">
              <span className="nav__icon-container">
                <FeatherIcon icon="box" className="fe nav__icon" />
              </span>

              <span className="nav__text nav__text--trailing">Overview</span>
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/orders"
              className="nav__link nav__link--extended disabled"
            >
              <span className="nav__icon-container">
                <FeatherIcon icon="shopping-bag" className="fe nav__icon" />
              </span>

              <span className="nav__text nav__text--trailing">Orders</span>
            </Link>
          </li>

          <li className="nav__item dropdown">
            <Link
              to="/products"
              className="nav__link nav__link--extended dropdown__toggle disabled"
            >
              <span className="nav__icon-container">
                <FeatherIcon icon="list" className="fe nav__icon" />
              </span>

              <span className="nav__text nav__text--trailing me-auto">
                Products
              </span>

              <span className="nav__icon-container dropdown__toggle-icon">
                <FeatherIcon icon="chevron-down" className="fe nav__icon" />
              </span>
            </Link>

            <ul
              className="dropdown__menu dropdown__menu--collapse"
              id="dropdownMenu"
            >
              <li>
                <Link
                  to="/products-list"
                  className="nav__link nav__link--extended active"
                >
                  <span className="nav__icon-container">
                    <FeatherIcon icon="list" className="fe nav__icon" />
                  </span>

                  <span className="nav__text nav__text--trailing">
                    Product List
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/add-products"
                  className="nav__link nav__link--extended active"
                >
                  <span className="nav__icon-container">
                    <FeatherIcon icon="plus" className="fe nav__icon" />
                  </span>

                  <span className="nav__text nav__text--trailing">
                    Add Products
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/edit-products"
                  className="nav__link nav__link--extended active"
                >
                  <span className="nav__icon-container">
                    <FeatherIcon icon="edit" className="fe nav__icon" />
                  </span>

                  <span className="nav__text nav__text--trailing">
                    Edit Products
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <Link
              to="/orders"
              className="nav__link nav__link--extended disabled"
            >
              <span className="nav__icon-container">
                <FeatherIcon icon="shopping-bag" className="fe nav__icon" />
              </span>

              <span className="nav__text nav__text--trailing">Calendar</span>
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/orders"
              className="nav__link nav__link--extended disabled"
            >
              <span className="nav__icon-container">
                <FeatherIcon icon="shopping-bag" className="fe nav__icon" />
              </span>

              <span className="nav__text nav__text--trailing">Admin</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar__footer">
        <button className="btn bg-gradient-primary btn--extended w-100 mb-0">
          <FeatherIcon
            icon="settings"
            className="fe btn__icon btn__icon--leading"
          />
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
