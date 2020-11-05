import * as React from "react";
import { Heading } from "&tools/Heading";
import { Button } from "&components/Button";
import nat8 from "&img/nat-8";
import nat9 from "&img/nat-9";

export const Popup = (): JSX.Element => {
  return (
    <div
      className="popup"
      id="popup"
      onClick={(): void => console.log("Clicked")}
    >
      <div className="popup__content">
        <div className="popup__left">
          <img
            src={nat8}
            alt="Tour Photos"
            className="popup__img"
          />
          <img src={nat9} alt="Tour Photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <Heading
            class="u-margin-bottom-small"
            type="heading-secondary"
            text="Start booking now"
          />
          <Heading
            class="u-margin-bottom-small"
            type="heading-tertiary"
            text="Important &ndash; Please read"
          />
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Minima, explicabo. Ratione, impedit eos. Fugiat
            recusandae eveniet reiciendis nulla non, nobis
            asperiores aspernatur adipisci ab, impedit harum
            quisquam quos aliquam facilis! Lorem ipsum dolor sit
            quos aliquam facilis!
          </p>
          <Button
            class="btn btn--green"
            to="#section-tours"
            label="Book Now"
          />
        </div>
      </div>
    </div>
  );
};
