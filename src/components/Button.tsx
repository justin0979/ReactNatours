import * as React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  class: string;
  to: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <a href={this.props.to} className={this.props.class}>
        {this.props.label}
      </a>
    );
  }
}
