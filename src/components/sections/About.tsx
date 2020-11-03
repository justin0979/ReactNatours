import * as React from "react";
import { Button } from "../Button";
import { Heading } from "&tools/Heading";
import nat1 from "&img/nat-1-large";
import nat2 from "&img/nat-2-large";
import nat3 from "&img/nat-3-large";

export class About extends React.Component {
  render(): JSX.Element {
    return (
      <section id="section-about" className="section-about">
        <Heading
          class="u-center-text u-margin-bottom-big"
          type="heading-secondary"
          text="Exciting tours for adventurous people"
        />
        <div className="row">
          <div className="col-1-of-2">
            <Heading
              class="u-margin-bottom-small"
              type="heading-tertiary"
              text="You're going to fall in love with nature"
            />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia cumque aspernatur consequuntur porro
              eius. Ad doloremque minus id corporis necessitatibus
              quis quos ea, eos, ipsa culpa neque veniam qui. Vitae!
            </p>
            <Heading
              type="heading-tertiary"
              text="You're in for an adventure"
              class="u-margin-bottom-small"
            />

            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Magnam repellendus sed optio reprehenderit
              aliquid deleniti perferendis maxime est recusandae.
            </p>
            <Button
              class="btn-text"
              label="Learn More &rarr;"
              to="#section-features"
            />
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1}
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={nat2}
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={nat3}
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
