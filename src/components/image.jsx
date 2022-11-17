import React from 'react';

function Image({ source, title, style }) {

  return (
    <img
      src={source}
      alt={title}
      style={style}
    />
  );
}

export default Image;
