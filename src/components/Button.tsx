import * as React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  class: string;
}

export class Button extends React.Component <ButtonProps>{
  render () {
    return (
        <Link to="#header" className={this.props.class}>{this.props.label}</Link>
    )
  }
}