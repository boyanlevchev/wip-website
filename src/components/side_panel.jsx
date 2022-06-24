import React from 'react';

import { Link } from "react-router-dom";

function SidePanel({ destination }) {

  return (
    <nav className={"side-panel"}>
      <Link to="/"><h1 className={"less-indented mt-0"}>julie dusuel</h1></Link>
      <ul className={"no-bullets less-indented ul-margin-bottom li-margin-bottom"}>
        <li><Link to="/bio">bio</Link></li>
        <li><Link to="/cv">cv</Link></li>
        <li><Link to="/shows">shows</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  );
}

export default SidePanel;
