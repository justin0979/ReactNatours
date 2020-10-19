import * as React from "react";
import { Card } from "&tools/Card";

export class Features extends React.Component {
  render(): JSX.Element {
    return (
      <section id="section-features" className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <Card
              class="icon-basic-world"
              heading="Explore the world"
              text="lorem ipsum dolor sit amet consuctetur, adipisicing elit. Ok, how is this for the text?"
            />
          </div>
          <div className="col-1-of-4">
            <Card
              class="icon-basic-compass"
              heading="Meet Nature"
              text="lorem ipsum dolor sit amet consuctetur, adipisicing elit. Ok, how is this for the text?"
            />
          </div>
          <div className="col-1-of-4">
            <Card
              class="icon-basic-map"
              heading="Find Your way"
              text="lorem ipsum dolor sit amet consuctetur, adipisicing elit. Ok, how is this for the text?"
            />
          </div>
          <div className="col-1-of-4">
            <Card
              class="icon-basic-heart"
              heading="Live a Healthier Life"
              text="lorem ipsum dolor sit amet consuctetur, adipisicing elit. Ok, how is this for the text?"
            />
          </div>
        </div>
      </section>
    );
  }
}
