import React from "react";

interface IAccordionGroupProps {
  title?: string;
  children?: React.ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  title,
  children,
}) => {
  return (
    <div className="AccordionGroup">
      {title && <div className="AccordionGroup-Title">{title}</div>}
      {children}
    </div>
  );
};
