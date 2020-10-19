import * as React from "react";
import { Button } from "../Button";
import nat1 from "&img/nat-1-large";
import nat2 from "&img/nat-2-large";
import nat3 from "&img/nat-3-large";

export class About extends React.Component {
  render(): JSX.Element {
    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div id="section-about" className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Mollitia cumque aspernatur consequuntur porro
              eius. Ad doloremque minus id corporis necessitatibus
              quis quos ea, eos, ipsa culpa neque veniam qui. Vitae!
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Magnam repellendus sed optio reprehenderit
              aliquid deleniti perferendis maxime est recusandae.
            </p>
            <Button
              class="btn-text"
              label="Learn More &rarr;"
              to=""
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
