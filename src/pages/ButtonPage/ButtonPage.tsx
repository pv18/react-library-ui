import React from "react";
import { Button } from "ui-kit";
import "./ButtonPage.scss";

export const ButtonPage: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <section className="ButtonPage">
      <h2>Button</h2>
      <Button isDisabled={false} onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
      <h2>Button disabled</h2>
      <Button isDisabled onClick={handleButtonClick}>
        Send
      </Button>
    </section>
  );
};
