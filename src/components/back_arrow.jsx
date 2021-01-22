import React from 'react';

import { Link } from "react-router-dom";

function BackArrow({destination}) {

  return(
    <Link className={"back-arrow"} to={destination}>
      <div className={"back-arrow-container"}>
        <div className={"back-arrow-body"}></div>
        <div className={"back-arrow-head"}></div>
      </div>
    </Link>
  );
}

export default BackArrow;
