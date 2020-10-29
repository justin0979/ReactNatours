import * as React from "react";
import { Button } from "&components/Button";
import { Heading } from "&tools/Heading";

export const Booking = (): JSX.Element => {
  return (
    <section className="section-booking" id="section-booking">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <Heading
                class="u-margin-bottom-medium"
                type="heading-secondary"
                text="Start Booking Now"
              />
              <input
                type="text"
                id="name"
                className="form__input"
                placeholder="Full Name"
                required
              />
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <Button
                label="Book Tour Now"
                to="#section-booking"
                class="btn btn--green"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
