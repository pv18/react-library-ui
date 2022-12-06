import React, { ReactNode } from "react";
import "./Layout.scss";
import { Heading, MenuPanel } from "components";

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
