import React from 'react';

function StickyNote({reference, content, bgColor, textColor, width, top, left, fontSize}) {

  return(
    <div className={"sticky-note"}
          style={{
            width: `${width}px`,
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            backgroundColor: bgColor,
            color: textColor,
            fontSize: `${fontSize}px`
          }}>
      <p>{reference}</p>
      <p>{content}</p>
    </div>
  );
}

export default StickyNote;
