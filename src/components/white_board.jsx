import React from 'react';
import { createBreakpoint } from "react-use";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 450 });


function WhiteBoard({children}) {
  const breakpoint = useBreakpoint();

  return(
    <div
      className={"whiteboard flex"}>
      <TransformWrapper
        defaultScale={0.9}
        wheel={{step: 100}}
        options={{
          minScale: 0.4,
          limitToBounds: false
        }}
        positionX={breakpoint === "S" ? -200 : 60}
        >

        <TransformComponent>
          <div className={"page-size"}>
            <div className={"page-size moveable-area"}>
              {children}
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default WhiteBoard;
