import React from "react";
import "./MenuItem.scss";

export const MenuItem = ({ name, href }) => {
  return (
    <li className="menu-item">
      <a className="menu-item__link" href={href}>
        {name}
      </a>
    </li>
  );
};
