import React from 'react';

import { Link } from "react-router-dom";

function Home(props) {

  return(
    <div className={""}>
      <ul className={"no-bullets less-indented ul-margin-bottom li-margin-bottom"}>
        <li><Link to="/the-porn-project">The Porn Project</Link></li>
        <li><Link to="/interview-transcriptions">Interview Transcriptions</Link></li>
      </ul>
    </div>
  );
}

export default Home;
