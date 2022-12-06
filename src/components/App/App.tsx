import React from "react";
import "./App.scss";
import { Layout } from "components";
import { ROUTES } from "../../routes";
import { ButtonPage, HomePage, IconPage } from "../../pages";
import { Route, Routes } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
