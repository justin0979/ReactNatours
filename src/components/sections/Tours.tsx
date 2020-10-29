import * as React from "react";
import { Card } from "&tools/Card";
import { Heading } from "&tools/Heading";
import { Button } from "&components/Button";

export const Tours = (): JSX.Element => {
  return (
    <section id="section-tours" className="section-tours">
      <Heading
        type="heading-secondary"
        class="u-center-text u-margin-bottom-big"
        text="Most Popular Tours"
      />
      <div className="row">
        <div className="col-1-of-3">
          <Card
            class={{
              side: "card__side--back-1",
              cardPicture: "card__picture--1",
              cardHeadingSpan: "card__heading-span--1",
              button: "btn btn--white",
            }}
            heading="The Sea Explorer"
            details={{
              length: "3 day tours",
              size: "Up to 30 people",
              guides: "2 tour guides",
              sleep: "Sleep in cozy hostels",
              difficulty: "Difficulty: very easy",
            }}
            price="$297"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            class={{
              side: "card__side--back-2",
              cardPicture: "card__picture--2",
              cardHeadingSpan: "card__heading-span--2",
              button: "btn btn--white",
            }}
            heading="The Forest Hiker"
            details={{
              length: "7 day tour",
              size: "Up to 40 people",
              guides: "6 tour guides",
              sleep: "Sleep in provided tents",
              difficulty: "Difficulty: medium",
            }}
            price="$497"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            class={{
              side: "card__side--back-3",
              cardPicture: "card__picture--3",
              cardHeadingSpan: "card__heading-span--3",
              button: "btn btn--white",
            }}
            heading="The Snow Adventurer"
            details={{
              length: "5 day tour",
              size: "Up to 15 people",
              guides: "3 tour guides",
              sleep: "Sleep in provided tents",
              difficulty: "Difficulty: hard",
            }}
            price="$897"
          />
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <Button
          to="#section-stories"
          label="Dicover all tours"
          class="btn btn--green"
        />
      </div>
    </section>
  );
};
