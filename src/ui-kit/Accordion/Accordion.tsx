import React, { FC, useState } from "react";
import classNames from "classnames";
import "react-slidedown/lib/slidedown.css";
import "./Accordion.scss";
import { Icon } from "../index";
import SlideDown from "react-slidedown";

interface IAccordionProps {
  className?: string;
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Accordion: FC<IAccordionProps> = ({
  className,
  title = "",
  isActive = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const handleToggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div
      className={classNames("Accordion", className, {
        Accordion__active: isOpen,
      })}
    >
      <div className="Accordion-Header" onClick={handleToggleAccordion}>
        <div className="Accordion-HeaderTitle">{title}</div>
        <Icon className="Accordion-HeaderIcon" type={"ArrowDown"} />
      </div>
      <SlideDown className="Accordion-ContentSlideDown">
        {isOpen && <div className="Accordion-Content">{children}</div>}
      </SlideDown>
    </div>
  );
};
