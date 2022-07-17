import React from "react";

import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer py-3 mt-4">
        <div className="container-fluid">
          <div className="d-flex align-items-center flex-wrap">
            <div className="copyright-text text-muted">
              © {new Date().getFullYear()}, All Rights Reserved.
              <Link to="/" className="font-weight-bold ms-1" target="_blank">
                Deshpro
              </Link>
            </div>

            <ul className="nav ms-auto">
              <li className="nav__item">
                <a
                  href="https://facebook.com/mahim_farhad"
                  className="btn btn--text-facebook btn--icon-only mb-0"
                >
                  <FeatherIcon icon="facebook" className="fe btn__icon" />
                </a>
              </li>

              <li className="nav__item ms-2">
                <a
                  href="https://instagram.com/mahim_farhad"
                  className="btn btn--text-instagram btn--icon-only mb-0"
                >
                  <FeatherIcon icon="instagram" className="fe btn__icon" />
                </a>
              </li>

              <li className="nav__item ms-2">
                <a
                  href="https://behance.com/mahimfarhad"
                  className="btn btn--text-behance btn--icon-only mb-0"
                >
                  <FeatherIcon icon="twitter" className="fe btn__icon" />
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="https://dribbble.com/mahimfarhad"
                  className="btn btn--text-dribbble btn--icon-only mb-0"
                >
                  <FeatherIcon icon="dribbble" className="fe btn__icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
