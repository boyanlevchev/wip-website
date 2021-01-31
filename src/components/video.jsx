import React from 'react';

function Video({top, left, source, title, height, width, vimeo, zIndex, titleSize, descriptionSize, vimeoDescription, vimeoTitle}) {

  return(
    <div style={{
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
          zIndex: zIndex,
          // height: `${height}px`,
          width: `min-content`
        }}>
      <iframe
        src={source}
        title={title}
        frameBorder={"0"}
        allow={"autoplay; fullscreen; picture-in-picture"}
        style={{backgroundColor: 'white'}}
        width={width}
        height={height}
        allowFullScreen></iframe>
        {vimeo &&
          <div class={"vimeo-description"}>
            <p style={{fontSize: `${titleSize}px`}}><strong>{vimeoTitle}</strong></p>
            <p style={{fontSize: `${descriptionSize}px`}}>{vimeoDescription}</p>
          </div>
        }
    </div>
    );
}

export default Video;
