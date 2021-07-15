import React, { useEffect } from "react";
import Hamburger from "../img/Hamburger.png";
import { Link } from "react-router-dom";
import "../App.scss";
import "../menu.scss";

function Header() {
  useEffect(() => {
    document.querySelector(".cta-button").onmousemove = function (e) {
      var x = e.pageX - e.target.offsetLeft;
      var y = e.pageY - e.target.offsetTop - e.target.scrollTop;
      console.log(e.scrollTop);
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    };
  }, []);

  return (
    <div className="nav">
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <img src={Hamburger} className="hamburger invert" alt="hamburger"></img>
      </label>

      <div class="btn-wrapper">
        <ul>
          <li>
            <a href="/payment">Payment</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
        </ul>
      </div>
      <h2>
        <Link className="logo" to="/">
          EXP|CON
        </Link>
      </h2>
      <Link className="cta-button" to="/payment">
        TRY IT NOW
      </Link>
    </div>
  );
}

export default Header;
