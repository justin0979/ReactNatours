import * as React from "react";

export interface CardProps {
  text: string;
  class: string;
}

export const Card = (props: CardProps): JSX.Element => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        {props.text} front
      </div>
      <div className={`card__side card__side--back ${props.class}`}>
        {props.text} back
      </div>
    </div>
  );
};
