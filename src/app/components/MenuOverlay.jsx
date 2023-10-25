import React from "react";
import NavLink from "./NavLink";

export const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
