import * as React from "react";
import { Button } from "../Button";
import { Heading } from "&tools/Heading";
import nat1 from "&img/nat-1-large";
import nat2 from "&img/nat-2-large";
import nat3 from "&img/nat-3-large";
import nat1sm from "&img/nat-1";
import nat2sm from "&img/nat-2";
import nat3sm from "&img/nat-3";

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
                srcSet={`${nat1sm} 300w, ${nat1} 1000w`}
                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                alt="Photo1"
                className="composition__photo composition__photo--p1"
                src={nat1}
              />
              <img
                srcSet={`${nat2sm} 300w, ${nat2} 1000w`}
                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
                src={nat2}
              />
              <img
                srcSet={`${nat3sm} 300w, ${nat3} 1000w`}
                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
                src={nat3}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
