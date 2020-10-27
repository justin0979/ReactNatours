import * as React from "react";

export interface TileProps {
  class: string;
  heading: string;
  text: string;
}

export const Tile = (props: TileProps): JSX.Element => {
  return (
    <div className="feature-box">
      <i className={`feature-box__icon ${props.class}`}></i>
      <h3 className="heading-tertiary u-margin-bottom-small">
        {props.heading}
      </h3>
      <p>{props.text}</p>
    </div>
  );
};
