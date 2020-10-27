import * as React from "react";

interface StoryCardProps {
  img: {
    src: any;
    alt: string;
  };
  name: string;
  heading: string;
  p: string;
}

export const StoryCard = (props: StoryCardProps): JSX.Element => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img
            src={props.img.src}
            alt={props.img.alt}
            className="story__image"
          />
          <figcaption className="story__caption">
            {props.name}
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.heading}
          </h3>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
};
