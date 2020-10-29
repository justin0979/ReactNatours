import * as React from "react";

interface HeadingProps {
  class: string;
  type: string;
  text: string;
}

export const Heading = (props: HeadingProps): JSX.Element => {
  switch (props.type) {
    case "heading-secondary":
      return (
        <div className={props.class}>
          <h2 className={props.type}>{props.text}</h2>
        </div>
      );
    case "heading-tertiary":
      return (
        <div className={`${props.class} `}>
          <h3 className={props.type}>{props.text}</h3>
        </div>
      );
    case "card__heading":
      return (
        <h4 className={props.type}>
          <span className={props.class}>{props.text}</span>
        </h4>
      );
    default:
      return <></>;
  }
};
