import React from "react";
import { MenuItemData } from "../MenuItemData";
import MenuItem from "./MenuItem";

const NavBar = () => {
  const depthLevel = 0;
  return (
    <nav className="main-nav">
      <ul className="menus">
        {MenuItemData.map((menu, index) => {
          return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
