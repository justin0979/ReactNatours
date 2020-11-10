import * as React from "react";
import logo from "&img/logo-green-2x";
import logo1x from "&img/logo-green-1x";
import logoGreenSm1x from "&img/logo-green-small-1x";
import logoGreenSm2x from "&img/logo-green-small-2x";

export const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logoGreenSm1x} 1x, ${logoGreenSm2x} 2x`}
            media="(max-width: 37.5rem)"
          />
          <img
            srcSet={`${logo1x} 1x, ${logo} 2x`}
            alt="Full Logo"
            src={logo}
          />
        </picture>
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
