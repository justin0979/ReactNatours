import * as React from "react";
import { StoryCard } from "./StoryCard";
import { Button } from "&components/Button";
import { VideoBackground } from "&tools/VideoBackground";
import nat8 from "&img/nat-8.jpg";
import nat9 from "&img/nat-9.jpg";
import vmp4 from "&img/video.mp4";
import vwebm from "&img/video.webm";

interface StoryProps {}

export const Stories = (props: StoryProps): JSX.Element => {
  return (
    <section className="section-stories">
      <VideoBackground sourceMP4={vmp4} sourceWEBM={vwebm} />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" id="section-stories">
          We make people genuinely happy
        </h2>
      </div>
      <StoryCard
        img={{
          src: nat8,
          alt: "Person on a tour",
        }}
        name="Mary Poppins"
        heading="Paddling my boat off"
        p="Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Explicabo eveniet est sit voluptate, omnis
              necessitatibus autem cum alias nulla sequi obcaecati
              consequatur quam! Maxime sequi eligendi debitis
              reprehenderit vel"
      />
      <StoryCard
        img={{
          src: nat9,
          alt: "Person overlooking mountains",
        }}
        name="Jack Wilson"
        heading="Wow! My life is completely different now"
        p="Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Explicabo eveniet est sit voluptate, omnis
              necessitatibus audolore! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Placeat doloribus aut,
              commodi ab delectus"
      />
      <div className="u-center-text u-margin-top-huge">
        <Button
          class=" btn-text"
          label="Read all stories &rarr;"
          to="#"
        />
      </div>
    </section>
  );
};
