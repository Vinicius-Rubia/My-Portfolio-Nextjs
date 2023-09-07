import React from "react";
import { NavLink } from "./NavLink";

interface IMenuOverlay {
  links: {
    title: string;
    path: string;
  }[];
}

export const MenuOverlay: React.FC<IMenuOverlay> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink key={index} href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
