import React from 'react';

// import {usePrevious} from 'react-use';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function WhiteBoard({children}) {
  return(
    <div
      className={"whiteboard"}>
      <TransformWrapper
        defaultScale={1}
        wheel={{step: 100}}>

        <TransformComponent>
          <div className={"page-size"}>
              {children}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default WhiteBoard;
