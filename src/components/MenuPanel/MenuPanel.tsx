import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "routes";
import "./MenuPanel.scss";

export const MenuPanel: React.FC = () => {
  const setActive = ({ isActive }) =>
    isActive
      ? `MenuPanel-ListItem MenuPanel-ListItem__active`
      : "MenuPanel-ListItem";

  return (
    <nav className="MenuPanel">
      <div className="MenuPanel-Brand">
        <div className="MenuPanel-BrandTitle">UI</div>
        <div className="MenuPanel-BrandVersion">v1.0.0</div>
      </div>
      <div className="MenuPanel-Title">Components</div>
      <div className="MenuPanel-List">
        <NavLink
          className={setActive}
          // activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.BUTTON}
        >
          Button
        </NavLink>

        <NavLink
          className={setActive}
          // activeClassName="MenuPanel-ListItem__active"
          to={ROUTES.ICON}
        >
          Icon
        </NavLink>
      </div>
    </nav>
  );
};