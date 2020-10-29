import * as React from "react";
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
              <div className="form__group">
                <input
                  type="text"
                  id="name"
                  className="form__input"
                  placeholder="Full Name"
                  required
                  autoComplete="off"
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="small"
                    className="form__radio-input"
                    name="tour-size"
                  />
                  <label
                    htmlFor="small"
                    className="form__radio-label"
                  >
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="large"
                    className="form__radio-input"
                    name="tour-size"
                  />
                  <label
                    htmlFor="large"
                    className="form__radio-label"
                  >
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">
                  Next Step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
