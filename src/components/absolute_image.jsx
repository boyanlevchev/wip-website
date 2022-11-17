import React from 'react';

function AbsoluteImage({top, left, source, title, height}) {

  return(
    <img
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`
      }}
      src={source}
      alt={title}
      />
  );
}

export default AbsoluteImage;
