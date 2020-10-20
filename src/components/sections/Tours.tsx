import * as React from "react";
import { Card } from "&tools/Card";

export const Tours = (): JSX.Element => {
  return (
    <section id="section-tours" className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most Popular Tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <Card text="text" class="card__side--back-1" />
        </div>
        <div className="col-1-of-3">
          <Card text="text" class="card__side--back-2" />
        </div>
        <div className="col-1-of-3">
          <Card text="text" class="card__side--back-3" />
        </div>
      </div>
    </section>
  );
};
