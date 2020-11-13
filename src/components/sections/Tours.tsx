import * as React from "react";
import { Card } from "&tools/Card";
import { Heading } from "&tools/Heading";
import { Button } from "&components/Button";
import { CardProps } from "&tools/Card";

interface TourProps {
  cards: CardProps[];
}

export const Tours = (props: TourProps): JSX.Element => {
  const showCards = (): JSX.Element[] => {
    return props.cards.map(
      (card): JSX.Element => {
        return (
          <div key={card.id} className="col-1-of-3">
            <Card
              class={card.class}
              heading={card.heading}
              details={card.details}
              href={card.href}
              price={card.price}
            />
          </div>
        );
      }
    );
  };

  return (
    <section id="section-tours" className="section-tours">
      <Heading
        type="heading-secondary"
        class="u-center-text u-margin-bottom-big"
        text="Most Popular Tours"
      />
      <div className="row">{showCards()}</div>
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
