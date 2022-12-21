import React from "react";
import "./App.scss";
import { Layout } from "components";
import { ROUTES } from "../../routes";
import {
  ButtonPage, CheckboxPage,
  HomePage,
  IconPage,
  ModalPage,
  SelectPage
} from "../../pages";
import { Route, Routes } from "react-router-dom";
import AccordionPage from "../../pages/AccordionPage";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
          <Route path={ROUTES.SELECT} element={<SelectPage />} />
          <Route path={ROUTES.MODAL} element={<ModalPage />} />
          <Route path={ROUTES.CHECKBOX} element={<CheckboxPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
