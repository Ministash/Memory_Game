import React from 'react';
import "./NavBarStyle.css";


let Navbar = props => (
    <nav>
    <div className="nav-wrapper">
      <a className=" x brand-logo">Social Network Memory Game</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li className="x"><a>This is your current score- {props.score}</a></li>
        <li className="x"><a>This is your highscore- {props.highscore}</a></li>
      </ul>
    </div>
  </nav>
)



export default Navbar;
