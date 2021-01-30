import React from 'react';

// import {usePrevious} from 'react-use';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function WhiteBoard({children}) {
  return(
    <div
      className={"whiteboard flex"}>
      <TransformWrapper
        defaultScale={0.9}
        wheel={{step: 100}}
        options={{
          minScale: 0.4,
          limitToBounds: false
        }}>

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
