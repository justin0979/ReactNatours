import * as React from "react";

export interface CardProps {
  class: {
    side: string;
    cardPicture: string;
  };
  picture: string;
  heading: string;
  details: string;
}

export const Card = (props: CardProps): JSX.Element => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div
          className={`card__picture ${props.class.cardPicture}`}
        ></div>
        <div className="card__heading"></div>
        <div className="card__details"></div>
      </div>
      <div
        className={`card__side card__side--back ${props.class.side}`}
      ></div>
    </div>
  );
};
