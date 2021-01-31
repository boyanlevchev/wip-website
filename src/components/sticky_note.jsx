import React from 'react';

function StickyNote({reference, content, bgColor, textColor, width, top, left, fontSize, additionalClass, centered, bold, shadow}) {

  return(
    <div className={`sticky-note ${additionalClass} ${centered && "text-centered"} ${bold && "text-bold"} ${shadow && "sticky-shadow"}`}
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
