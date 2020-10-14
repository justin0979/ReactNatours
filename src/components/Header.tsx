import React from "react";
import logoWhite from "&img/logo-white.png";
import { Button } from './Button';

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <div className="logo-box">
          <img src={logoWhite} alt="Logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">
              is where life happens
            </span>
          </h1>
          <Button label="Discover Our Tours" class="btn btn-white btn-animated"/>
        </div>
      </header>
    );
  }
}
