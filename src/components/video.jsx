import React from 'react';

function Video({top, left, source, title, height}) {

  return(
    <iframe
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`
      }}
      src={source}
      title={title}
      frameBorder={"0"}
      allow={"autoplay; fullscreen; picture-in-picture"}
      allowFullScreen></iframe>
  );
}

export default Video;
