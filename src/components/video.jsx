import React from 'react';

function Video({top, left, source, title, height, width}) {

  return(
    <iframe
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`
      }}
      src={source}
      title={title}
      frameBorder={"0"}
      allow={"autoplay; fullscreen; picture-in-picture"}
      height={height}
      width={width}
      allowFullScreen></iframe>
  );
}

export default Video;
