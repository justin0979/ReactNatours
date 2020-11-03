import * as React from "react";
import { Heading } from "./Heading";
import { Button } from "&components/Button";

export interface CardProps {
  class: {
    side: string;
    cardPicture: string;
    cardHeadingSpan: string;
    button: string;
  };
  heading: string;
  details: {
    length: string;
    size: string;
    guides: string;
    sleep: string;
    difficulty: string;
  };
  price: string;
}

export const Card = (props: CardProps): JSX.Element => {
  const tourDetails = (): JSX.Element => {
    const { details } = props;
    return (
      <ul>
        <li>{details.length}</li>
        <li>{details.size}</li>
        <li>{details.guides}</li>
        <li>{details.sleep}</li>
        <li>{details.difficulty}</li>
      </ul>
    );
  };

  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div
          className={`card__picture ${props.class.cardPicture}`}
        ></div>
        <h4 className="card__heading">
          <span
            className={`card__heading-span ${props.class.cardHeadingSpan}`}
          >
            {props.heading}
          </span>
        </h4>
        <div className="card__details">{tourDetails()}</div>
      </div>
      <div
        className={`card__side card__side--back ${props.class.side}`}
      >
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">{props.price}</p>
          </div>
          <Button
            label="Book Now"
            to="#header"
            class={props.class.button}
          />
        </div>
      </div>
    </div>
  );
};
