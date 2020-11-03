import * as React from "react";

export const Navigation = (): JSX.Element => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#section-about" className="navigation__link">
              About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#header" className="navigation__link">
              Your Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-tours" className="navigation__link">
              Popular Tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-stories" className="navigation__link">
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-booking" className="navigation__link">
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
