import * as React from "react";
import { Heading } from "./Heading";

export interface TileProps {
  class: string;
  heading: string;
  text: string;
}

export const Tile = (props: TileProps): JSX.Element => {
  return (
    <div className="feature-box">
      <i className={`feature-box__icon ${props.class}`}></i>
      <Heading
        type="heading-tertiary"
        class="u-margin-bottom-small"
        text={props.heading}
      />
      <p>{props.text}</p>
    </div>
  );
};
