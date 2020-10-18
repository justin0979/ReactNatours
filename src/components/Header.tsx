import React from "react";
import logoWhite from "&img/logo-white";
import { Button } from "&components/Button";

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img
            src={logoWhite}
            alt="Logo"
            className="header__logo"
          />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">
              is where life happens
            </span>
          </h1>
          <Button
            to="#section-about"
            label="Discover Our Tours"
            class="btn btn--white btn--animated"
          />
        </div>
      </header>
    );
  }
}
