import React from 'react';

function StickyNote({reference, content, bgColor, position}) {

  return(
    <div className={`sticky-note ${bgColor} ${position}`}>
      <p>{reference}</p>
      <p>{content}</p>
    </div>
  );
}

export default StickyNote;
