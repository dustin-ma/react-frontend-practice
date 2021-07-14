import React from "react";
import { ReorderThreeOutline } from "react-ionicons";

export default function Section({ title, subtitle, color, id }) {
  var bgcolor = color;
  return (
    <div className={"section" + " " + color}>
      <div className="menu"></div>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
