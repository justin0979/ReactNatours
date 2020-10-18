import * as React from "react";

export class About extends React.Component {
  render() {
    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-8">
          <h2 id="section-about" className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">Text content</div>
          <div className="col-1-of-2">Image composition</div>
        </div>
      </section>
    );
  }
}
