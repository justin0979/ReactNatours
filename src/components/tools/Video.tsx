import * as React from "react";

interface VideoProps {
  sourceMP4?: any;
  sourceWEBM?: any;
}

export const Video = (props: VideoProps): JSX.Element => {
  const videoTypes = (): JSX.Element => {
    if (props.sourceMP4 && props.sourceWEBM) {
      return (
        <>
          <source src={props.sourceMP4} type="video/mp4" />
          <source src={props.sourceWEBM} type="video/webm" />
        </>
      );
    } else if (props.sourceMP4) {
      return <source src={props.sourceMP4} type="video/mp4" />;
    } else if (props.sourceWEBM) {
      return <source src={props.sourceWEBM} type="video/webm" />;
    } else {
      return <></>;
    }
  };

  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay loop muted>
        {videoTypes()}
        Your browser does not support mp4 nor webm video file
        format.
      </video>
    </div>
  );
};
