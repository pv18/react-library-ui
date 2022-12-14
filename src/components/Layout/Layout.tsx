import React, { ReactNode } from "react";
import { Heading, MenuPanel } from "components";
import "./Layout.scss";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <MenuPanel />
      <Heading />
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
