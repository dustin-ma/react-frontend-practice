import React from "react";
import Hamburger from "../img/Hamburger.png";
import "../App.scss";
import "../menu.scss";

function Clicked() {
  console.log("CLICKED");
}

function Header() {
  return (
    <div className="nav">
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <img
          src={Hamburger}
          className="hamburger invert "
          onClick={Clicked}
        ></img>
      </label>

      <div class="btn-wrapper">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <h2>EXP|CON</h2>
      <h2>EXP|CON</h2>
    </div>
  );
}

export default Header;
