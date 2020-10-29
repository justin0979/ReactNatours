import * as React from "react";
import logo from "&img/logo-green-2x";

export const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full Logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#header" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#header" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#header" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#header" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#header" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built with React by{" "}
            <a href="#footer" className="footer__link">
              Justin Mangawang
            </a>{" "}
            by following along the online course{" "}
            <a href="#footer" className="footer__link">
              Advanced CSS and Sass
            </a>
            . Copyright &copy; Design by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
};
